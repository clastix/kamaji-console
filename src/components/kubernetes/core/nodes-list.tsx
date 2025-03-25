import { BaseTable } from "@/components/ui/table";
import { formatAge } from "@/components/utils/format-age";
import { RouterOutputs } from "@/utils/api";

type Node = RouterOutputs["k8s"]["getClastixTPCNodes"][number];

export const NodesList = ({ nodes }: { nodes: Node[] }) => {
  return (
    <BaseTable actions={[]} headers={headers} mapper={mapper} objs={nodes} />
  );
};

const headers = [
  "Name",
  "Status",
  "Age",
  "Version",
  "Internal IP",
  "External IP",
  "OS Image",
  "Kernel Version",
  "Container Runtime",
];

const mapper = (n: Node) => {
  const name = n.metadata?.name;
  const status = getNodeStatus(n);
  const age = formatAge(n.metadata?.creationTimestamp);
  const version = n.status?.nodeInfo?.kubeletVersion;
  const image = n.status?.nodeInfo?.osImage;
  const internalIp = n.status?.addresses?.find(
    (a) => a.type === "InternalIP"
  )?.address;
  const externalIp = n.status?.addresses?.find(
    (a) => a.type === "ExternalIP"
  )?.address;
  const kernelVersion = n.status?.nodeInfo?.kernelVersion;
  const containerRuntime = n.status?.nodeInfo?.containerRuntimeVersion;

  return [
    <span key="name">{name}</span>,
    <div key="status" className="flex items-center space-x-2">
      <StatusBtn nodeStatus={status} /> <span>{status}</span>{" "}
    </div>,
    <span key="age">{age}</span>,
    <span key="version">{version}</span>,
    <span key="internalIp">{internalIp}</span>,
    <span key="externalIp">{externalIp}</span>,
    <span key="image">{image}</span>,
    <span key="kernelVersion">{kernelVersion}</span>,
    <span key="containerRuntime">{containerRuntime}</span>,
  ];
};

function getNodeStatus(n: Node) {
  const readyCond = n.status?.conditions?.find(
    (c) => c.type === "Ready"
  )?.status;
  if (!readyCond) {
    return "Unknown";
  }

  if (readyCond === "True") {
    return "Ready";
  }

  return "NotReady";
}

export const StatusBtn = ({
  nodeStatus: nodeStatus,
  size = 10,
}: {
  nodeStatus: string;
  size?: number;
}) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  const status = statusMap(nodeStatus);
  if (status === "error") {
    return (
      <span className="relative flex" style={style}>
        <span
          style={style}
          className="relative inline-flex rounded-full bg-red-500"
        ></span>
      </span>
    );
  }
  if (status === "ready") {
    return (
      <span className="relative flex" style={style}>
        <span
          style={style}
          className="relative inline-flex rounded-full bg-green-500"
        ></span>
      </span>
    );
  }
  return (
    <span className="relative flex" style={style}>
      <span
        style={style}
        className="relative inline-flex rounded-full bg-gray-500"
      ></span>
    </span>
  );
};

function statusMap(status: string) {
  if (status === "Ready") {
    return "ready";
  }
  if (status === "NotReady") {
    return "error";
  }
  return "unknonw";
}
