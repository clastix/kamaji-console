import { IoK8sApiCoreV1Secret } from "@/gen/api";
import { Cluster } from "@kubernetes/client-node";
import { X509Certificate, createHash, getRandomValues } from "crypto";

const tokenAllowdChars = "0123456789abcdefghijklmnopqrstuvwxyz";
const len = tokenAllowdChars.length;

const generatePassword = (length: number) => {
  return Array.from(getRandomValues(new Uint32Array(length)))
    .map((x) => tokenAllowdChars[x % len])
    .join("");
};

const bootstrapTokenIDBytes = 6;
const bootstrapTokenSecretBytes = 16;

interface Token {
  id: string;
  secret: string;
}

export function generateKubeadmToken() {
  const id = generatePassword(bootstrapTokenIDBytes);
  const secret = generatePassword(bootstrapTokenSecretBytes);
  return { id, secret };
}

export function parseCa(cluster: Cluster) {
  const ca = Buffer.from(cluster.caData!, "base64").toString("ascii");
  const x509 = new X509Certificate(ca);
  const key = x509.publicKey;
  const k = key.export({ type: "spki", format: "der" });
  const hash = "sha256:" + createHash("sha256").update(k).digest("hex");
  return hash;
}

export function getTokenSecret(token: Token) {
  const data = {
    "auth-extra-groups": "system:bootstrappers:kubeadm:default-node-token",
    "token-id": token.id,
    "token-secret": token.secret,
    "token-description": "create by kamaji to join nodes pool",
    expiration:
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split(".")[0] + "Z",
    "usage-bootstrap-authentication": "true",
    "usage-bootstrap-signing": "true",
  };

  const hashedData = Object.entries(data).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: Buffer.from(value).toString("base64"),
    }),
    {} as Record<string, string>
  );

  const secret: IoK8sApiCoreV1Secret = {
    apiVersion: "v1",
    kind: "Secret",
    type: "bootstrap.kubernetes.io/token",
    data: hashedData,
    metadata: {
      name: `bootstrap-token-${token.id}`,
      namespace: "kube-system",
    },
  };

  return secret;
}
