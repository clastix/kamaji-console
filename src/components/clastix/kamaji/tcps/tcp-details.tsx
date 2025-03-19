import type {
  IoClastixKamajiV1alpha1TenantControlPlane,
  IoClastixKamajiV1alpha1TenantControlPlaneSpecAddons,
} from "@/gen/api";
import {
  ArrowDownTrayIcon,
  CircleStackIcon,
  ClipboardIcon,
  ClockIcon,
  CpuChipIcon,
  EyeIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { formatAge } from "../../../utils/format-age";
import { StatusBtn } from "./tcp-status";
import {Button} from "@/components/ui/Button";

export const TenantControlPlaneDetails = ({
  tcp,
  scale,
  viewKubeconfig,
}: {
  tcp: IoClastixKamajiV1alpha1TenantControlPlane;
  scale: () => void;
  viewKubeconfig: () => void;
}) => {
  const trpStatus = tcp.status?.kubernetesResources?.version
    ?.status as unknown as string;
  const storage = tcp.status?.storage;
  const deployment = tcp.status?.kubernetesResources?.deployment;
  const age = formatAge(tcp.metadata?.creationTimestamp);
  const adminssionControllers = tcp.spec?.kubernetes.admissionControllers || [];
  const addons = tcp.spec?.addons;

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="mt-2 flex flex-col space-y-1">
          <div className="flex h-8 items-center">
            <span className="mr-4 text-gray-400">Status</span>
            <StatusBtn tcpStatus={trpStatus} size={10} />
            <span className="ml-1">{trpStatus}</span>
          </div>
          <div className="flex h-8 items-center align-baseline">
            <span className="mr-4 text-gray-400">Datastore</span>
            <CircleStackIcon className="mr-1 w-4" />
            <span>
              <span> {storage?.dataStoreName} </span>
              <span className="ml-1 text-gray-500">{storage?.driver}</span>
            </span>
          </div>
          <div className="flex h-8 items-center align-baseline">
            <span className="mr-4 text-gray-400">Endpoint</span>
            <ShareIcon className="mr-1 w-4" />
            <span>
              <span> {tcp.status?.controlPlaneEndpoint} </span>
            </span>
          </div>
          <div className="flex h-8 items-center align-baseline">
            <span className="mr-4 text-gray-400">Replicas</span>
            <CpuChipIcon className="mr-1 w-4" />
            <span>
              <span className="">
                {deployment?.availableReplicas || 0}/{deployment?.replicas}
              </span>
              <span className="ml-1 text-gray-500 mr-4">pods</span>
              <Button size={"small"} onClick={scale} label={'Scale'} />
            </span>
          </div>
          <div className="flex h-8 items-center align-baseline">
            <span className="mr-4 text-gray-400">Kubernetes Version</span>
            <CpuChipIcon className="mr-1 w-4" />
            <span>{tcp.spec?.kubernetes.version}</span>
          </div>
          <div className="flex h-8 items-center align-baseline">
            <span className="mr-4 text-gray-400">Age</span>
            <ClockIcon className="mr-1 w-4" />
            <span>
              <span> {age} </span>
            </span>
          </div>
          <div className="flex h-8 items-center align-baseline">
            <span className="mr-4 text-gray-400">Kubeconfig</span>
            <span>
              <Button size={"small"} onClick={viewKubeconfig} label={'View Kubeconfig'} />
            </span>
          </div>
        </div>
        <div className="mt-2 flex flex-col space-y-2">
          <div className="align-baseline">
            <span className="mr-4 text-primary">Admission Controllers</span>
            <ul className="h-28 list-disc overflow-y-scroll">
              {adminssionControllers.map((ac) => (
                <li key={ac} className="ml-5 text-gray-500">
                  {ac}
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center align-baseline">
            <span className="mr-4 text-primary">Addons</span>
            <Addons addons={addons} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Addons = ({
  addons,
}: {
  addons: IoClastixKamajiV1alpha1TenantControlPlaneSpecAddons | undefined;
}) => {
  const activeAddons = [
    {
      name: "CoreDNS",
      active: !!addons?.coreDNS,
    },
    {
      name: "konnectivity",
      active: !!addons?.konnectivity,
    },
    {
      name: "kubeProxy",
      active: !!addons?.kubeProxy,
    },
  ];

  return (
    <ul>
      {activeAddons.map((addon) => (
        <li key={addon.name}>
          <input
            className="mr-2"
            type="checkbox"
            checked={addon.active}
            disabled={true}
          />
          <span className="text-gray-500">{addon.name}</span>
        </li>
      ))}
    </ul>
  );
};
