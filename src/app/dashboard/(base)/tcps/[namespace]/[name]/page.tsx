"use client";

import { useDeleteTCP } from "@/components/actions/tcps/delete-tcp";
import { useEditTenantControlPlane } from "@/components/actions/tcps/edit-tcp";
import { useScaleTcp } from "@/components/actions/tcps/scale-tcp";
import { useViewKubeconfig } from "@/components/actions/tcps/view-kubeconfig";
import { TenantControlPlaneDetails } from "@/components/clastix/kamaji/tcps/tcp-details";
import { Loading } from "@/components/ui/loading";
import { type IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";
import { reactApi } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Nodes } from "./nodes";
import { ReleatedObjects } from "./related-objects";
import { TerminalComponent } from "@/components/terminal";

interface Params {
  name: string;
  namespace: string;
}

const Page = ({ params }: { params: Params }) => {
  const router = useRouter();
  const q = reactApi.k8s.getClastixTCP.useQuery(
    {
      name: params.name,
      namespace: params.namespace,
    },
    {
      refetchInterval: 2000,
    }
  );

  useEffect(() => {
    if (q.isError) {
      router.push(`/dashboard/tcps`);
    }
  }, [q.isError, router]);

  if (q.isError || q.isLoading || !q.data) {
    return (
      <>
        <main className="w-full">
          <div className="py-6">
            <div className="mx-auto space-y-6 px-4 sm:px-6 md:px-8">
              <TopBar params={params} />
              <Loading />
            </div>
          </div>
        </main>
      </>
    );
  }

  return <TCPPage params={params} tcp={q.data} />;
};

export default Page;

const TCPPage = ({
  params,
  tcp,
}: {
  params: Params;
  tcp: IoClastixKamajiV1alpha1TenantControlPlane;
}) => {
  const scaleTcp = useScaleTcp();
  const viewKubeconfig = useViewKubeconfig();

  return (
    <>
      <main className="w-full">
        <div className="py-6">
          <div className="mx-auto space-y-6 px-4 sm:px-6 md:px-8">
            <TopBar tcp={tcp} params={params} />
            <TenantControlPlaneDetails
              tcp={tcp}
              scale={() => scaleTcp(tcp)}
              viewKubeconfig={() => viewKubeconfig(params)}
            />
            <ReleatedObjects {...params} />
            <Nodes {...params} />
          </div>
        </div>
      </main>
    </>
  );
};

const TopBar = ({
  params,
  tcp,
}: {
  tcp?: IoClastixKamajiV1alpha1TenantControlPlane;
  params: Params;
}) => {
  const editoTcp = useEditTenantControlPlane();
  const deleteTcp = useDeleteTCP();
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <div className="flex justify-between py-4">
      <h2 className="text-2xl">
        <Link href="/dashboard/tcps" className="mr-4">
          Tenant Control Plane
        </Link>
        <span className="font-bold text-primary-800">
          {params.namespace} / {params.name}
        </span>
      </h2>
      <div className="space-x-2">
        {tcp && (
          <>
            <button
              className="btn-ghost btn-sm btn"
              onClick={() => editoTcp(tcp, false)}
            >
              View
            </button>
            <button
              className="btn-ghost btn-sm btn"
              onClick={() => editoTcp(tcp, true)}
            >
              Edit
            </button>
            <button
              className="btn-ghost btn-sm btn"
              onClick={() => deleteTcp(params)}
            >
              Delete
            </button>
            <button
              className="btn-primary btn-sm btn"
              onClick={() => setShowTerminal(!showTerminal)}
            >
              Terminal
            </button>
          </>
        )}
      </div>
      {showTerminal && (
        <div 
          id="kamaji-terminal-container"
          className="fixed inset-x-0 bottom-0 h-96 bg-black shadow-lg z-50"
        >
          <div className="relative w-full h-full flex flex-col">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
              <div className="text-white opacity-50 text-sm">Terminal</div>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => {
                  const event = new CustomEvent('terminal-cleanup');
                  window.dispatchEvent(event);
                  setShowTerminal(false);
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              {tcp && <TerminalComponent tcp={tcp} onClose={() => setShowTerminal(false)} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
