import clsx from "clsx";
import { SVGProps } from "react";

export type TableFunc<T> = (o: T) => void;
export type TableAction<T> = {
  icon: (props: Omit<SVGProps<SVGSVGElement>, "ref">) => JSX.Element | null;
  action: TableFunc<T>;
  tooltip: string;
};

type Selectable<T> = {
  isSelected: (o: T) => boolean;
  setSelected: (o: T, selected: boolean) => void;
};

type BaseTableProps<T = any> = {
  objs: T[];
  onClick?: TableFunc<T>;
  actions: TableAction<T>[];
  headers: string[];
  mapper: (o: T) => JSX.Element[];
  selectable?: Selectable<T>;
};

export function BaseTable<T>(props: BaseTableProps<T>) {
  return (
    <table className="table-compact table w-full">
      <thead>
        <TableHeader
          selectable={props.selectable}
          actions={props.actions}
          headers={props.headers}
        />
      </thead>
      <tbody className="">
        {props.objs.map((o, id) => (
          <TableRow<T>
            key={id}
            obj={o}
            onClick={props.onClick}
            actions={props.actions}
            mapper={props.mapper}
            selectable={props.selectable}
          />
        ))}
      </tbody>
    </table>
  );
}

function TableHeader<T>({
  actions,
  headers,
  selectable,
}: Pick<BaseTableProps<T>, "headers" | "actions" | "selectable">) {
  return (
    <tr>
      {!!selectable && <th></th>}
      {headers.map((h, idx) => (
        <th key={idx}>{h}</th>
      ))}
      {actions.length > 0 && <th></th>}
    </tr>
  );
}

type TableRowProps<T = any> = {
  obj: T;
  onClick?: TableFunc<T>;
  actions: TableAction<T>[];
  mapper: (o: T) => JSX.Element[];
  selectable?: Selectable<T>;
};

function TableRow<T>({
  actions,
  mapper,
  obj,
  onClick,
  selectable,
}: TableRowProps<T>) {
  const rows = mapper(obj);
  return (
    <tr className={clsx({ "hover cursor-pointer": !!onClick })}>
      {!!selectable && (
        <td>
          <input
            type="checkbox"
            className="form-checkbox"
            checked={selectable.isSelected(obj)}
            onChange={(e) => selectable.setSelected(obj, e.target.checked)}
          />
        </td>
      )}
      {rows.map((r, idx) => (
        <td onClick={() => onClick?.(obj)} key={idx} className="">
          {r}
        </td>
      ))}
      {actions.length > 0 && (
        <td className="flex">
          {actions.map((a, idx) => (
            <div
              key={idx}
              className="tooltip tooltip-top tooltip-info"
              data-tip={a.tooltip}
            >
              <button
                onClick={(e) => {
                  a.action(obj);
                }}
                className="btn-ghost btn-sm btn-circle btn-group btn"
              >
                <a.icon className="w-5" />
              </button>
            </div>
          ))}
        </td>
      )}
    </tr>
  );
}
