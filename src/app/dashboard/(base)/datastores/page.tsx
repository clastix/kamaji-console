"use client";
import { useDownloadReources } from "@/components/actions/download-resources";
import { useCreateDS } from "@/components/actions/ds/create-ds";
import { useDeleteDS } from "@/components/actions/ds/delete-ds";
import { useDeleteDSs } from "@/components/actions/ds/delete-dss";
import { useEditDS } from "@/components/actions/ds/edit-ds";
import { Loading } from "@/components/ui/loading";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { DataStoresTable } from "../../../../components/clastix/kamaji/dastastores/datastores-table-list";
import { useSearchState } from "../../../../components/utils/search-state";
import type { IoClastixKamajiV1alpha1DataStore as DS } from "../../../../gen/api";
import { reactApi } from "../../../../utils/api";

const DashboardPage = () => {
  const res = reactApi.k8s.listClastixDatastores.useQuery(undefined, {
    refetchInterval: 2000,
  });

  const [filter, setFilter, filterredDSs] = useFilteredDS(res.data || []);
  const [selected, isSelected, setSelect] = useSelected(filterredDSs);
  const { onClick, onDelete, onEdit, onView } = useActions();

  if (res.isLoading) {
    return <Loading />;
  }

  if (res.isError) {
    return "error";
  }

  return (
    <>
      <main className="w-full">
        <div className="py-6">
          <div className="mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <h2 className="text-2xl font-bold text-primary-800">
                Datastores
              </h2>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-full">
                <GlobalActions selected={selected} />
              </div>
              <Filters filter={filter} setFilter={setFilter} />
            </div>
            <div className="mt-5">
              <DataStoresTable
                dss={filterredDSs}
                isSelected={isSelected}
                setSelected={setSelect}
                onClick={onClick}
                onDelete={onDelete}
                onEdit={onEdit}
                onView={onView}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;

const options = {
  includeScore: true,
  keys: ["metadata.name", "metadata.namespace", "status.storage.driver"],
};

function filterDSs(dss: DS[], filter: string) {
  if (filter === "") {
    return dss;
  }
  const fuse = new Fuse(dss, options);
  return fuse.search(filter).map((r) => r.item);
}

function useFilteredDS(dss: DS[]) {
  const [filter, setFilter] = useSearchState("filter", "");
  let filterredDSs = filterDSs(dss, filter);

  return [filter, setFilter, filterredDSs] as const;
}

const Filters = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (v: string) => void;
}) => {
  return (
    <div className="flex items-center">
      <div className="form-control ml-2 rounded-lg ring-1 ring-primary-400">
        <div className="input-group-sm input-group ">
          <input
            type="text"
            placeholder="Search…"
            className="input input-sm"
            name="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button
            className="btn-ghost btn-square btn-sm btn disabled:bg-primary-200 disabled:text-primary-400"
            disabled={!filter}
            onClick={() => setFilter("")}
          >
            <XMarkIcon className="h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

function useSelected(dss: DS[]) {
  const [selected, setSelected] = useState<{ name: string }[]>([]);

  const isSelected = useCallback(
    (ds: DS) => {
      return selected.some((s) => s.name === ds.metadata?.name);
    },
    [selected]
  );

  const setSelect = useCallback(
    (ds: DS, selected: boolean) => {
      if (isSelected(ds) && !selected) {
        setSelected((s) => s.filter((t) => !(t.name == ds.metadata?.name)));
        return;
      }
      if (!isSelected(ds) && selected) {
        setSelected((s) => [
          ...s,
          {
            name: ds.metadata?.name || "",
          },
        ]);
      }
    },
    [isSelected, setSelected]
  );

  return [
    selected
      .map((s) => dss.find((ds) => ds.metadata?.name === s.name))
      .filter(isTruthy),
    isSelected,
    setSelect,
  ] as const;
}

function isTruthy<T>(value?: T | undefined | null | false): value is T {
  return !!value;
}

function map2Metadata(ds: DS): { name: string; namespace: string } {
  return {
    name: ds.metadata?.name || "",
    namespace: ds.metadata?.namespace || "",
  };
}

const GlobalActions = ({ selected }: { selected: DS[] }) => {
  const deleteDSs = useDeleteDSs();
  const deleteDS = useDeleteDS();
  const createDS = useCreateDS();
  const downloadDSs = useDownloadReources();

  const onDelete = useCallback(() => {
    if (selected.length > 1) {
      deleteDSs(selected.map(map2Metadata));
      return;
    } else if (selected.length === 1) {
      deleteDS(map2Metadata(selected[0]!));
    }
  }, [deleteDSs, deleteDS, selected]);

  return (
    <div className="flex items-center space-x-2">
      <div className="space-x-2">
        <button
          className="btn-outline btn-primary btn-sm btn"
          onClick={createDS}
        >
          Create
        </button>
        <button
          className="btn-ghost btn-sm btn"
          disabled={selected.length === 0}
          onClick={() => downloadDSs(selected, "datastores")}
        >
          Download
        </button>
        <button
          className="btn-ghost btn-sm btn"
          disabled={selected.length === 0}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <div>
        {selected.length > 0 && (
          <span className="text-sm font-semibold text-primary-900">
            {selected.length} selected
          </span>
        )}
      </div>
    </div>
  );
};

function useActions() {
  const editTcp = useEditDS();
  const deleteTcp = useDeleteDS();
  const router = useRouter();

  const onClick = useCallback(
    (ds: DS) => {
      router.push(`/dashboard/datastores/${ds.metadata?.name}`);
    },
    [router]
  );

  const onEdit = useCallback((ds: DS) => editTcp(ds, true), [editTcp]);

  const onView = useCallback((ds: DS) => editTcp(ds, false), [editTcp]);

  const onDelete = useCallback(
    (ds: DS) => {
      deleteTcp({
        name: ds.metadata?.name || "",
      });
    },
    [deleteTcp]
  );

  return {
    onClick,
    onEdit,
    onView,
    onDelete,
  };
}
