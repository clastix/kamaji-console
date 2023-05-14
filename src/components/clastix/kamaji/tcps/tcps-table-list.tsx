import { BaseTable, TableAction, TableFunc } from "@/components/ui/table";
import { type IoClastixKamajiV1alpha1TenantControlPlane as TCP } from "@/gen/api";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { formatAge } from "../../../utils/format-age";
import { StatusBtn } from "./tcp-status";

type TCPFunc = TableFunc<TCP>;

export const TCPsTable = ({
  tcps,
  onDelete,
  onEdit,
  onView,
  onClick,
  isSelected,
  setSelected,
}: {
  tcps: TCP[];
  onDelete: TCPFunc;
  onEdit: TCPFunc;
  onView: TCPFunc;
  onClick: TCPFunc;
  isSelected: (tcp: TCP) => boolean;
  setSelected: (tcp: TCP, selected: boolean) => void;
}) => {
  const actions: TableAction<TCP>[] = [
    {
      tooltip: "View",
      icon: EyeIcon,
      action: onView,
    },
    {
      tooltip: "Edit",
      icon: PencilIcon,
      action: onEdit,
    },
    {
      tooltip: "Delete",
      icon: TrashIcon,
      action: onDelete,
    },
  ];

  return (
    <BaseTable
      objs={tcps}
      actions={actions}
      headers={headers}
      onClick={onClick}
      mapper={mapper}
      selectable={{
        isSelected,
        setSelected,
      }}
    />
  );
};

const headers = [
  "Name",
  "Namespace",
  "Status",
  "Pods",
  "Endpoint",
  "Version",
  "Datastore",
  "Age",
];

const mapper = (tcp: TCP): JSX.Element[] => {
  const name = tcp.metadata?.name;
  const namespace = tcp.metadata?.namespace;
  const trpStatus = tcp.status?.kubernetesResources?.version
    ?.status as unknown as string;
  const storage = tcp.status?.storage;
  const deployment = tcp.status?.kubernetesResources?.deployment;
  const endpoint = tcp.status?.controlPlaneEndpoint;
  const k8sVersion = tcp.spec?.kubernetes.version;
  const age = formatAge(tcp.metadata?.creationTimestamp);

  return [
    <span key="name">{name}</span>,
    <span key="namespace">{namespace}</span>,
    <span key="status" className="flex items-center gap-2">
      <StatusBtn size={8} tcpStatus={trpStatus} /> {trpStatus}
    </span>,
    <span key="deployment">
      {deployment?.availableReplicas || 0}/{deployment?.replicas || "-"}
    </span>,
    <span key="endpoint">{endpoint}</span>,
    <span key="k8sVersion">{k8sVersion}</span>,
    <span key="storage">
      {storage?.dataStoreName}{" "}
      <span className="ml-1 text-gray-500">{storage?.driver}</span>
    </span>,
    <span key="age">{age}</span>,
  ];
};
