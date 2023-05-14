import { BaseTable } from "@/components/ui/table";
import type { V1ConfigMap } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";
import { useEditKubernetesObject } from "@/components/actions/objs/edit-obj";

export const ConfigMapsList = ({
  configMaps,
}: {
  configMaps: V1ConfigMap[];
}) => {
  const edit = useEditKubernetesObject();
  return (
    <BaseTable
      actions={[]}
      onClick={o => edit({ kind: "ConfigMap", apiVersion: "v1", ...o }, true)}
      headers={headers}
      mapper={mapper}
      objs={configMaps}
    />
  );
};

const headers = ["Name", "Data", "Age"];

const mapper = (d: V1ConfigMap) => {
  const name = d.metadata?.name;
  const data = Object.keys(d.data || {}).length;
  const age = formatAge(d.metadata?.creationTimestamp);
  return [
    <span key="name">{name}</span>,
    <span key="data">{data}</span>,
    <span key="age">{age}</span>,
  ];
};
