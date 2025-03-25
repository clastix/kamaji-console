"use client";

import { Loading } from "@/components/ui/loading";
import { Suspense, useState } from "react";
import { ConfigMapsList } from "../../../../../../components/kubernetes/core/config-maps";
import { DeploymentsList } from "../../../../../../components/kubernetes/core/deplyoment-list";
import { PodsList } from "../../../../../../components/kubernetes/core/pods-list";
import { SecretsList } from "../../../../../../components/kubernetes/core/secrets";
import { ServicesList } from "../../../../../../components/kubernetes/core/services";
import { reactApi } from "../../../../../../utils/api";
import {Tabs} from "@/components/ui/Tabs";

const options = [
  "Pods",
  "Deployments",
  "Services",
  "Secrets",
  "ConfigMaps",
] as const;
type Option = (typeof options)[number];

export const ReleatedObjects = (params: Params) => {
  const [selected, setSelected] = useState<Option>(options[0]);
  return (
    <div className="flex h-48 flex-col overflow-hidden rounded ">
      <Tabs
        items={options}
        onChange={setSelected}
        activeTab={selected}
      />
      <div className="flex-grow overflow-y-scroll">
        <Suspense fallback={<Loading />}>
          <Objects params={params} type={selected} />
        </Suspense>
      </div>
    </div>
  );
};

const Objects = ({ params, type }: { params: Params; type: Option }) => {
  switch (type) {
    case "Pods":
      return <Pods {...params} />;
    case "Deployments":
      return <Deplyoments {...params} />;
    case "Services":
      return <Services {...params} />;
    case "Secrets":
      return <Secrets {...params} />;
    case "ConfigMaps":
      return <ConfigMaps {...params} />;
    default:
      return null;
  }
};

const Pods = (params: Params) => {
  const q = reactApi.k8s.getClastixTPCPods.useQuery(
    {
      name: params.name,
      namespace: params.namespace,
    },
    {
      suspense: true,
      refetchInterval: 2000,
    }
  );

  return <PodsList pods={q.data || []} />;
};

const Deplyoments = (params: Params) => {
  const q = reactApi.k8s.getClastixTPCDeployments.useQuery(
    {
      name: params.name,
      namespace: params.namespace,
    },
    {
      suspense: true,
      refetchInterval: 2000,
    }
  );

  return <DeploymentsList deployments={q.data!} />;
};

const Secrets = (params: Params) => {
  const q = reactApi.k8s.getClastixTPCSecrets.useQuery(
    {
      name: params.name,
      namespace: params.namespace,
    },
    {
      suspense: true,
      refetchInterval: 2000,
    }
  );

  return <SecretsList secrets={q.data!} />;
};

const ConfigMaps = (params: Params) => {
  const q = reactApi.k8s.getClastixTPCConfigMaps.useQuery(
    {
      name: params.name,
      namespace: params.namespace,
    },
    {
      suspense: true,
      refetchInterval: 2000,
    }
  );

  return <ConfigMapsList configMaps={q.data!} />;
};

const Services = (params: Params) => {
  const q = reactApi.k8s.getClastixTPCServices.useQuery(
    {
      name: params.name,
      namespace: params.namespace,
    },
    {
      suspense: true,
      refetchInterval: 2000,
    }
  );

  return <ServicesList services={q.data!} />;
};

interface Params {
  name: string;
  namespace: string;
}
