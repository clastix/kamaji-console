import * as k8s from "@kubernetes/client-node";
import * as api from "../gen/api";
import { handleKubernetesError } from "./api/httperr";
import { TRPCError } from "@trpc/server";
import { generateKubeadmToken, parseCa } from "./kubeadm/kubeadm";
import { getTokenSecret } from "./kubeadm/kubeadm";
import { replaceKubeconfigWithInternalConn } from "./k8s-utils";

export function getK8sCli(kc: k8s.KubeConfig) {
  return {
    coreV1: kc.makeApiClient(k8s.CoreV1Api),
    appV1: kc.makeApiClient(k8s.AppsV1Api),
    custom: kc.makeApiClient(k8s.CustomObjectsApi),
    clastix: kc.makeApiClient(api.KamajiClastixIoV1alpha1Api),
    logs: new k8s.Log(kc),
    objectApi: k8s.KubernetesObjectApi.makeApiClient(kc),
    kc: kc,
  };
}

export type K8sCli = ReturnType<typeof getK8sCli>;

const nodePoolMetadataKey = "nodepools.kamaji.clastix.io";

export class KubernetesCli {
  constructor(private readonly k8sCli: K8sCli) {}

  async ping() {
    try {
      await this.k8sCli.coreV1.listNamespace();
      return true;
    } catch (err) {
      return false;
    }
  }
}

export class ClastixCli {
  constructor(private readonly k8sCli: K8sCli) {}

  async getTcpOrThrow(name: string, namespace: string) {
    try {
      const res =
        await this.k8sCli.clastix.readKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
          name,
          namespace
        );
      const tcp = res.body;
      if (!tcp) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }
      return tcp;
    } catch (err) {
      throw handleKubernetesError(err);
    }
  }

  async getTcpKubeConfigOrThrow(
    tcp: api.IoClastixKamajiV1alpha1TenantControlPlane
  ) {
    const namespace = tcp.metadata?.namespace!;
    const secretName = tcp.status?.kubeconfig?.admin?.secretName;
    if (!secretName) {
      throw new TRPCError({ code: "NOT_FOUND", message: "not found" });
    }
    const res = await this.k8sCli.coreV1.readNamespacedSecret(
      secretName,
      namespace
    );

    const hashedConf = res.body?.data?.["admin.conf"] as string;
    if (!hashedConf) {
      throw new TRPCError({ code: "NOT_FOUND", message: "not found" });
    }

    return Buffer.from(hashedConf, "base64").toString("ascii");
  }

  async getSveltosToken() {
    const namespace = process.env.SVELTOS_NAMESPACE || '';
    const secretName = process.env.SVELTOS_SECRET_NAME || '';
    if (!secretName) {
      throw new TRPCError({ code: "NOT_FOUND", message: "not found" });
    }
    const res = await this.k8sCli.coreV1.readNamespacedSecret(
        secretName,
        namespace
    );

    const hashedToken = res.body?.data?.token;
    if (!hashedToken) {
      throw new TRPCError({ code: "NOT_FOUND", message: "not found" });
    }

    return Buffer.from(hashedToken, "base64").toString("ascii");
  }

  async getTcpNodesOrThrow(
    tcp: api.IoClastixKamajiV1alpha1TenantControlPlane
  ): Promise<k8s.V1Node[]> {
    const cli = await this.getTcpK8sApiCliOrThrow(tcp);
    const res = await cli.coreV1.listNode();
    return res.body?.items || [];
  }

  async getTcpK8sApiCliOrThrow(
    tcp: api.IoClastixKamajiV1alpha1TenantControlPlane
  ) {
    let kubeConfig = await this.getTcpKubeConfigOrThrow(tcp);
    const _kc = new k8s.KubeConfig();
    if (process.env.NODE_ENV === "production") {
      kubeConfig = replaceKubeconfigWithInternalConn(kubeConfig, tcp);
    }
    _kc.loadFromString(kubeConfig);
    return getK8sCli(_kc);
  }

  async createConnectionSecret(
    tcp: api.IoClastixKamajiV1alpha1TenantControlPlane
  ) {
    const cli = await this.getTcpK8sApiCliOrThrow(tcp);
    const token = generateKubeadmToken();
    const secret = getTokenSecret(token);
    await cli.coreV1.createNamespacedSecret(
      secret.metadata!.namespace!,
      secret
    );
    const caCommands = cli.kc
      .getClusters()
      .map((c) => parseCa(c))
      .map((h) => `--discovery-token-ca-cert-hash ${h}`);
    return `kubeadm join ${tcp.status?.controlPlaneEndpoint} --token ${
      token.id
    }.${token.secret} ${caCommands.join(" ")}`;
  }

  addNodePoolMetadata(
    nodePoolId: string,
    metadata: api.IoClastixKamajiV1alpha1TenantControlPlane["metadata"] = {}
  ): api.IoClastixKamajiV1alpha1TenantControlPlane["metadata"] {
    const annotations = metadata.annotations || {};
    let nodePools = (annotations[nodePoolMetadataKey]?.split(",") || []).filter(
      (s) => !!s
    );
    nodePools = [...nodePools, nodePoolId];
    annotations[nodePoolMetadataKey] = nodePools.join(",");
    return {
      ...metadata,
      annotations,
    };
  }

  removeNodePoolMetadata(
    nodePoolId: string,
    metadata: api.IoClastixKamajiV1alpha1TenantControlPlane["metadata"] = {}
  ): api.IoClastixKamajiV1alpha1TenantControlPlane["metadata"] {
    const annotations = metadata.annotations || {};
    const nodePools = (
      annotations[nodePoolMetadataKey]?.split(",") || []
    ).filter((id) => id !== nodePoolId);
    annotations[nodePoolMetadataKey] = nodePools.join(",");
    return {
      ...metadata,
      annotations,
    };
  }

  getNodePoolsIds(
    tcp: api.IoClastixKamajiV1alpha1TenantControlPlane
  ): string[] {
    const annotations = tcp.metadata?.annotations || {};
    const nodePools = annotations[nodePoolMetadataKey]?.split(",") || [];
    return nodePools.filter((id) => id !== "");
  }

  async updateTcp(tcp: api.IoClastixKamajiV1alpha1TenantControlPlane) {
    try {
      const res =
        await this.k8sCli.clastix.replaceKamajiClastixIoV1alpha1NamespacedTenantControlPlane(
          tcp.metadata!.name!,
          tcp.metadata!.namespace!,
          tcp
        );
      const newTcp = res.body;
      if (!newTcp) {
        throw new TRPCError({
          code: "NOT_FOUND",
        });
      }
      return newTcp;
    } catch (err) {
      throw handleKubernetesError(err);
    }
  }
}
