import { IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";

export function replaceKubeconfigWithInternalConn(
  kubeConfig: string,
  tcp: IoClastixKamajiV1alpha1TenantControlPlane
): string {
  return kubeConfig.replace(
    /server: https:\/\/.*/,
    `server: ${buildTcpServiceEdnpoint(tcp)}`
  );
}

function buildTcpServiceEdnpoint(
  tcp: IoClastixKamajiV1alpha1TenantControlPlane
) {
  const service = tcp.status?.kubernetesResources?.service;
  if (!service) {
    return null;
  }

  return `https://${service.name}.${service.namespace}.svc.cluster.local:${service.port}`;
}
