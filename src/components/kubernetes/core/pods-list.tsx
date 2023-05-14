import { BaseTable } from "@/components/ui/table";
import type { V1Pod } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";
import { useEditKubernetesObject } from "@/components/actions/objs/edit-obj";

export const PodsList = ({ pods }: { pods: V1Pod[] }) => {
  const edit = useEditKubernetesObject();
  return (
    <BaseTable
      actions={[]}
      onClick={(o) =>
        edit(
          {
            kind: "Pod",
            apiVersion: "v1",
            ...o,
          },
          true
        )
      }
      headers={headers}
      mapper={mapper}
      objs={pods}
    />
  );
};

const headers = ["Name", "Ready", "Status", "Restarts", "AGE", "IP", "Node"];

const mapper = (p: V1Pod) => {
  const containers = p.status?.containerStatuses?.length || 0;
  const containersReady =
    p.status?.containerStatuses?.filter((c) => c.ready).length || 0;
  const status = p.status?.phase;
  const age = formatAge(p.status?.startTime);
  const restarts = p.status?.containerStatuses?.reduce(
    (acc, c) => acc + c.restartCount,
    0
  );
  const lastState = p.status?.containerStatuses
    ?.filter((p) => !!p.lastState?.terminated?.finishedAt)
    .map((c) => new Date(c.lastState?.terminated?.finishedAt || new Date()))
    .sort()
    .reverse()[0];

  return [
    <span key="name">{p.metadata?.name}</span>,
    <span key="ready">
      {containersReady} / {containers}
    </span>,
    <span key="status">{status}</span>,
    <span key="restarts">
      {restarts} {lastState && <span>({formatAge(lastState)} ago)</span>}
    </span>,
    <span key="age">{age}</span>,
    <span key="ip">{p.status?.podIP}</span>,
    <span key="node">{p.spec?.nodeName}</span>,
  ];
};
