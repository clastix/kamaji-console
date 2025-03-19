"use client";

import { useDeleteDS } from "@/components/actions/ds/delete-ds";
import { useEditDS } from "@/components/actions/ds/edit-ds";
import { DatastoreDetails } from "@/components/clastix/kamaji/dastastores/datastore-details";
import { Loading } from "@/components/ui/loading";
import { IoClastixKamajiV1alpha1DataStore as DS } from "@/gen/api";
import { reactApi } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {Button} from "@/components/ui/Button";

interface Params {
  name: string;
}

const DatastorePage = ({ params }: { params: Params }) => {
  const router = useRouter();
  const q = reactApi.k8s.getClastixDastastore.useQuery(
    {
      name: params.name,
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

  return (
    <>
      <main className="w-full">
        <div className="py-6">
          <div className="mx-auto  px-4 sm:px-6 md:px-8">
            <TopBar params={params} ds={q.data} />
            <DatastoreDetails datastore={q.data!} />
          </div>
        </div>
      </main>
    </>
  );
};

export default DatastorePage;

const TopBar = ({ params, ds }: { ds?: DS; params: Params }) => {
  const deleteDS = useDeleteDS();
  const editDS = useEditDS();

  return (
    <div className="flex justify-between py-4">
      <h2 className="text-2xl">
        <Link href="/dashboard/datastores" className="mr-4">
          Datastore
        </Link>
        <span className="font-bold text-text-lightBlue">{params.name}</span>
      </h2>
      <div className="space-x-2">
        {ds && (
          <>
            <Button label={'View'} onClick={() => editDS(ds, false)}/>
            <Button label={'Edit'} onClick={() => editDS(ds, true)}/>
            <Button label={'Delete'} onClick={() => deleteDS(params)}/>
          </>
        )}
      </div>
    </div>
  );
};
