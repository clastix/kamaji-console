"use client";

export const TableViewSwicth = ({
  setTableView,
  tableView,
}: {
  tableView: boolean;
  setTableView: (v: boolean) => void;
}) => {
  return (
    <>
      <input
        name="switch-table"
        type="checkbox"
        className="toggle ml-4"
        checked={tableView}
        onChange={(e) => setTableView(e.target.checked)}
      />
      <label className="ml-2" htmlFor="switch-table">
        Table View
      </label>
    </>
  );
};
