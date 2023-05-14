import { BaseTable } from "@/components/ui/table";
import type { V1Service } from "@kubernetes/client-node";
import { formatAge } from "../../utils/format-age";
import { useEditKubernetesObject } from "@/components/actions/objs/edit-obj";

export const ServicesList = ({ services }: { services: V1Service[] }) => {
  const edit = useEditKubernetesObject();
  return (
    <BaseTable
      actions={[]}
      onClick={(o) =>
        edit(
          {
            kind: "Service",
            apiVersion: "v1",
            ...o,
          },
          true
        )
      }
      headers={headers}
      mapper={mapper}
      objs={services}
    />
  );
};

const headers = ["Name", "TYPE", "Cluster IP", "External IP", "Port(s)", "Age"];

const mapper = (d: V1Service) => {
  const name = d.metadata?.name;
  const type = d.spec?.type;
  const clusterIP = d.spec?.clusterIP;
  const externalIP =
    d.status?.loadBalancer?.ingress?.map((i) => i.ip).join(",") ?? "<NONE>";
  const ports = d.spec?.ports?.map((p) => `${p.port}/${p.protocol}`).join(",");
  const age = formatAge(d.metadata?.creationTimestamp);
  return [
    <span key="name">{name}</span>,
    <span key="type">{type}</span>,
    <span key="clusterIP">{clusterIP}</span>,
    <span key="externalIP">{externalIP}</span>,
    <span key="ports">{ports}</span>,
    <span key="age">{age}</span>,
  ];
};
