import {
  CircleStackIcon,
  CpuChipIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import type { IoClastixKamajiV1alpha1TenantControlPlane } from "../../../../gen/api";
import { KubernetesIcon } from "../../../icons/kubernetes";
import { formatAge } from "../../../utils/format-age";
import { StatusBtn } from "./tcp-status";

export type TenantControlPlaneCardProps = {
  tcp: IoClastixKamajiV1alpha1TenantControlPlane;
};

export const TenantControlPlaneCard = ({
  tcp,
}: TenantControlPlaneCardProps) => {
  const trpStatus = tcp.status?.kubernetesResources?.version
    ?.status as unknown as string;

  const storage = tcp.status?.storage;
  const deployment = tcp.status?.kubernetesResources?.deployment;
  const enpoint = tcp.status?.controlPlaneEndpoint;
  return (
    <div className="flex h-64 w-64 flex-col overflow-hidden">
      <div className="border-b  bg-gray-100 px-2 py-2">
        <h3 className="text-sm">
          <span className="text-gray-700">{tcp.metadata?.namespace}</span>
          <span className="mx-1">/</span>
          <span className="font-bold text-gray-800">{tcp.metadata?.name}</span>
        </h3>
      </div>
      <div className="mt-2 flex-grow space-y-2">
        <div className="flex space-x-1 px-2 align-baseline text-sm">
          <CircleStackIcon className="mr-1 w-4" />
          <span>
            <span> {storage?.dataStoreName} </span>
            <span className="ml-1 text-gray-500">{storage?.driver}</span>
          </span>
        </div>
        <div className="flex space-x-1 px-2 align-baseline text-sm">
          <CpuChipIcon className="mr-1 w-4" />
          <span>
            <span className="">
              {deployment?.availableReplicas || 0}/{deployment?.replicas || "-"}
            </span>
            <span className="ml-1 text-gray-500">pods</span>
          </span>
        </div>
        <div className="flex space-x-1 px-2 align-baseline text-sm">
          <ShareIcon className="mr-1 w-4" />
          <span>{enpoint && <span className="">{enpoint}</span>}</span>
        </div>
        <div className="flex space-x-1 px-2 align-baseline text-sm">
          <KubernetesIcon className="mr-1 w-4" />
          <span>{tcp.spec?.kubernetes.version}</span>
        </div>
      </div>
      <div className="flex w-full justify-between border-t-[1px] bg-gray-100 px-2 py-1">
        <div className="flex items-center text-xs">
          <StatusBtn size={8} tcpStatus={trpStatus} />
          <span className="ml-1 text-gray-800">{trpStatus}</span>
        </div>
        <div className="text-xs">
          {formatAge(tcp.metadata?.creationTimestamp)}
        </div>
      </div>
    </div>
  );
};
