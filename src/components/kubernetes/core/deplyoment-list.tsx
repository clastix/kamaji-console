import { BaseTable } from "@/components/ui/table";
import type { V1Deployment } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";
import { useEditKubernetesObject } from "@/components/actions/objs/edit-obj";

export const DeploymentsList = ({
  deployments,
}: {
  deployments: V1Deployment[];
}) => {
  const edit = useEditKubernetesObject();

  return (
    <BaseTable
      actions={[]}
      onClick={(o) =>
        edit(
          {
            kind: "Deployment",
            apiVersion: "apps/v1",
            ...o,
          },
          true
        )
      }
      headers={headers}
      mapper={mapper}
      objs={deployments}
    />
  );
};

const headers = ["Name", "Ready", "Up to date", "Available", "Age"];

const mapper = (d: V1Deployment) => {
  const name = d.metadata?.name;
  const replicas = d.spec?.replicas || "-";
  const availabe = d.status?.availableReplicas || 0;
  const updated = d.status?.updatedReplicas || 0;

  const age = formatAge(d.metadata?.creationTimestamp);
  return [
    <span key="name">{name}</span>,
    <span key="ready">
      {availabe} / {replicas}
    </span>,
    <span key="updated">{updated}</span>,
    <span key="availabe">{availabe}</span>,
    <span key="age">{age}</span>,
  ];
};
