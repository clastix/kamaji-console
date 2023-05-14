"use client";

import { NodesList } from "@/components/kubernetes/core/nodes-list";
import { Loading } from "@/components/ui/loading";
import { reactApi } from "@/utils/api";
import { useState } from "react";

export const Nodes = (params: Params) => {
  const [refetchInterval, setRefetchInterval] = useState(10000);
  const q = reactApi.k8s.getClastixTPCNodes.useQuery(params, {
    refetchInterval,
    retry() {
      return false;
    },
    onError: () => setRefetchInterval(0),
  });

  const nodes = q.data || [];

  return (
    <div className="mt-10">
      <div className="my-2 flex justify-between border-b">
        <h3 className="font-bold">Nodes</h3>
      </div>
      <div className="overflow-x-auto">
        {q.isLoading ? <Loading /> : <NodesList nodes={nodes} />}
      </div>
    </div>
  );
};

interface Params {
  name: string;
  namespace: string;
}
