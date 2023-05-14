"use client";

import { Loading } from "@/components/ui/loading";
import clsx from "clsx";
import { Suspense, useState } from "react";
import { ConfigMapsList } from "../../../../../../components/kubernetes/core/config-maps";
import { DeploymentsList } from "../../../../../../components/kubernetes/core/deplyoment-list";
import { PodsList } from "../../../../../../components/kubernetes/core/pods-list";
import { SecretsList } from "../../../../../../components/kubernetes/core/secrets";
import { ServicesList } from "../../../../../../components/kubernetes/core/services";
import { reactApi } from "../../../../../../utils/api";

const options = [
  "pods",
  "deployments",
  "services",
  "secrets",
  "configmaps",
] as const;
type Option = (typeof options)[number];

export const ReleatedObjects = (params: Params) => {
  const [selected, setSelected] = useState<Option>(options[0]);
  return (
    <div className="flex h-48 flex-col overflow-hidden rounded ">
      <div className="tabs">
        {options.map((option) => (
          <button
            key={option}
            className={clsx("tab-bordered tab", {
              "tab-active": selected === option,
            })}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex-grow overflow-y-scroll">
        <Suspense fallback={<Loading />}>
          <Objects params={params} type={selected} />
        </Suspense>
      </div>
    </div>
  );
};

const Objects = ({ params, type }: { params: Params; type: Option }) => {
  if (type === "pods") {
    return <Pods {...params} />;
  } else if (type === "deployments") {
    return <Deplyoments {...params} />;
  } else if (type === "services") {
    return <Services {...params} />;
  } else if (type === "secrets") {
    return <Secrets {...params} />;
  } else if (type === "configmaps") {
    return <ConfigMaps {...params} />;
  }
  return null;
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
