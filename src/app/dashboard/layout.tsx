import { NotFoundK8s } from "@/components/ui/kubernetes-404";
import { KubernetesCli, getK8sCli } from "@/server/k8s";
import { KubeConfig } from "@kubernetes/client-node";
import { ReactNode, use } from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Layout({ children }: { children: ReactNode }) {
  const res = await pingKubernetes();
  if (!res) {
    return <NotFoundK8s />;
  }
  return <>{children}</>;
}

async function pingKubernetes() {
  try {
    const kc = new KubeConfig();
    kc.loadFromDefault();
    const k8sCli = getK8sCli(kc);
    const clastixCli = new KubernetesCli(k8sCli);
    return await clastixCli.ping();
  } catch {
    return false;
  }
}
