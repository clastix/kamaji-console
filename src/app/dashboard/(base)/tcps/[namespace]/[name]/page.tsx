"use client";

import React from 'react';
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
import { useEffect } from "react";
import { Nodes } from "./nodes";
import { ReleatedObjects } from "./related-objects";
import {Button} from "@/components/ui/Button";

interface Params {
  name: string;
  namespace: string;
}

const Page = ({ params }: { params: Params }) => {
  const router = useRouter();
  const q = reactApi.k8s.getClastixTCP.useQuery(
    {
      name: React.use(params).name,
      namespace: React.use(params).namespace,
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
            <ReleatedObjects {...React.use(params)} />
            <Nodes {...React.use(params)} />
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

  return (
    <div className="flex justify-between py-4">
      <h2 className="text-2xl">
        <Link href="/dashboard/tcps" className="mr-4">
          Tenant Control Plane
        </Link>
        <span className="font-bold text-text-lightBlue">
          {React.use(params).namespace} / {React.use(params).name}
        </span>
      </h2>
      <div className="space-x-2">
        {tcp && (
          <>
            <Button label={'View'} onClick={() => editoTcp(tcp, false)} />
            <Button label={'Edit'} onClick={() => editoTcp(tcp, true)} />
            <Button label={'Delete'} onClick={() => deleteTcp(params)} />
          </>
        )}
      </div>
    </div>
  );
};
