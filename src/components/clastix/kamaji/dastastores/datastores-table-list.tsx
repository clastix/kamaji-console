import { BaseTable, TableAction, TableFunc } from "@/components/ui/table";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { type IoClastixKamajiV1alpha1DataStore as DS } from "../../../../gen/api";
import { formatAge } from "../../../utils/format-age";

type DSFunc = TableFunc<DS>;

export const DataStoresTable = (props: {
  dss: DS[];
  onDelete: DSFunc;
  onEdit: DSFunc;
  onView: DSFunc;
  onClick: DSFunc;
  isSelected: (ds: DS) => boolean;
  setSelected: (ds: DS, selected: boolean) => void;
}) => {
  const actions: TableAction<DS>[] = [
    {
      tooltip: "View",
      icon: EyeIcon,
      action: props.onView,
    },
    {
      tooltip: "Edit",
      icon: PencilIcon,
      action: props.onEdit,
    },
    {
      tooltip: "Delete",
      icon: TrashIcon,
      action: props.onDelete,
    },
  ];

  return (
    <BaseTable
      objs={props.dss}
      actions={actions}
      headers={headers}
      onClick={props.onClick}
      mapper={mapper}
      selectable={{
        isSelected: props.isSelected,
        setSelected: props.setSelected,
      }}
    />
  );
};

const headers = ["Name", "Driver", "Age"];

const mapper = (ds: DS): JSX.Element[] => {
  const name = ds.metadata?.name;
  const driver = ds.spec?.driver;
  const age = formatAge(ds.metadata?.creationTimestamp);

  return [
    <span key="name">{name}</span>,
    <span key="driver">{driver}</span>,
    <span key="age">{age}</span>,
  ];
};
