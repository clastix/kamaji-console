import { BaseTable } from "@/components/ui/table";
import type { V1Secret } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";
import { useEditKubernetesObject } from "@/components/actions/objs/edit-obj";

export const SecretsList = ({ secrets }: { secrets: V1Secret[] }) => {
  const edit = useEditKubernetesObject();

  return (
    <BaseTable
      actions={[]}
      onClick={(o) =>
        edit(
          {
            kind: "Secret",
            apiVersion: "v1",
            ...o,
          },
          true
        )
      }
      headers={headers}
      mapper={mapper}
      objs={secrets}
    />
  );
};

const headers = ["Name", "Type", "Data", "Age"];

const mapper = (s: V1Secret) => {
  const name = s.metadata?.name;
  const type = s.type;
  const data = Object.keys(s.data || {}).length;
  const age = formatAge(s.metadata?.creationTimestamp);
  return [
    <span key="name">{name}</span>,
    <span key="type">{type}</span>,
    <span key="data">{data}</span>,
    <span key="age">{age}</span>,
  ];
};
