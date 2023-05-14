"use client";
import { useDownloadReources } from "@/components/actions/download-resources";
import { useCreateTCP } from "@/components/actions/tcps/create-tcp";
import { useDeleteTCP } from "@/components/actions/tcps/delete-tcp";
import { useDeleteTCPs } from "@/components/actions/tcps/delete-tcps";
import { useEditTenantControlPlane } from "@/components/actions/tcps/edit-tcp";
import { TCPsTable } from "@/components/clastix/kamaji/tcps/tcps-table-list";
import { useSearchState } from "@/components/utils/search-state";
import { IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";
import { reactApi } from "@/utils/api";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { NameSpaceSwith } from "./ns-switch";

type TCP = IoClastixKamajiV1alpha1TenantControlPlane;

const DashboardPage = () => {
  const [namespace, setNamespace] = useSearchState("namespace", "default");
  const res = reactApi.k8s.listClastixTCPs.useQuery(
    { namespace },
    {
      suspense: true,
      refetchInterval: 2000,
    }
  );

  const [filter, setFilter, filterredTcps] = useFilteredTCP(res.data || []);
  const [selected, isSelected, setSelect] = useSelected(filterredTcps);

  return (
    <>
      <main className="w-full">
        <div className="py-6">
          <div className="mx-auto  px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <h2 className="text-2xl font-bold text-primary-800">
                Tenant Control Planes
              </h2>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-full">
                <GlobalActions selected={selected} />
              </div>
              <Filters
                filter={filter}
                namespace={namespace}
                setFilter={setFilter}
                setNamespace={setNamespace}
              />
            </div>

            <ControlPlaneList
              tcps={filterredTcps}
              isSelected={isSelected}
              setSelect={setSelect}
            />
          </div>
        </div>
      </main>
    </>
  );
};

function map2Metadata(tcp: TCP): { name: string; namespace: string } {
  return {
    name: tcp.metadata?.name || "",
    namespace: tcp.metadata?.namespace || "",
  };
}

const GlobalActions = ({ selected }: { selected: TCP[] }) => {
  const deleteTCPs = useDeleteTCPs();
  const deleteTCP = useDeleteTCP();
  const createTCP = useCreateTCP();
  const downloadTPCs = useDownloadReources();

  const onDelete = useCallback(() => {
    if (selected.length > 1) {
      deleteTCPs(selected.map(map2Metadata));
      return;
    } else if (selected.length === 1) {
      deleteTCP(map2Metadata(selected[0]!));
    }
  }, [selected, deleteTCPs, deleteTCP]);

  return (
    <div className="flex items-center space-x-2">
      <div className="space-x-2">
        <button
          className="btn-outline btn-primary btn-sm btn"
          onClick={createTCP}
        >
          Create
        </button>
        <button
          className="btn-ghost btn-sm btn"
          disabled={selected.length === 0}
          onClick={() => downloadTPCs(selected, "tcps")}
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

export default DashboardPage;

const options = {
  includeScore: true,
  keys: [
    "metadata.name",
    "metadata.namespace",
    "status.controlPlaneEndpoint",
    "spec.kubernetes.version",
    "status.storage.driver",
    "status.storage.dataStoreName",
  ],
};

function filterTCPs(tcps: TCP[], filter: string) {
  if (filter === "") {
    return tcps;
  }
  const fuse = new Fuse(tcps, options);
  const result = fuse.search(filter).map((r) => r.item);
  return result;
}

function useFilteredTCP(tcps: TCP[]) {
  const [filter, setFilter] = useSearchState("filter", "");
  const filterredTcps = filterTCPs(tcps, filter);

  return [filter, setFilter, filterredTcps] as const;
}

const ControlPlaneList = ({
  tcps,
  isSelected,
  setSelect,
}: {
  tcps: TCP[];
  isSelected: (tcp: TCP) => boolean;
  setSelect: (tcp: TCP, selected: boolean) => void;
}) => {
  const { onClick, onEdit, onView, onDelete } = useActions();
  return (
    <div className="mt-5">
      <TCPsTable
        tcps={tcps}
        onClick={onClick}
        onDelete={onDelete}
        onEdit={onEdit}
        onView={onView}
        isSelected={isSelected}
        setSelected={setSelect}
      />
    </div>
  );
};

function useActions() {
  const editTcp = useEditTenantControlPlane();
  const deleteTcp = useDeleteTCP();
  const router = useRouter();

  const onClick = useCallback(
    (tcp: TCP) => {
      router.push(
        `/dashboard/tcps/${tcp.metadata?.namespace}/${tcp.metadata?.name}`
      );
    },
    [router]
  );

  const onEdit = useCallback((tcp: TCP) => editTcp(tcp, true), [editTcp]);

  const onView = useCallback((tcp: TCP) => editTcp(tcp, false), [editTcp]);

  const onDelete = useCallback(
    (tcp: TCP) => {
      deleteTcp({
        name: tcp.metadata?.name || "",
        namespace: tcp.metadata?.namespace || "",
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

const Filters = ({
  namespace,
  filter,
  setFilter,
  setNamespace,
}: {
  namespace: string;
  setNamespace: (v: string) => void;
  filter: string;
  setFilter: (v: string) => void;
}) => {
  return (
    <div className="flex items-center">
      <NameSpaceSwith namespace={namespace} setNamespace={setNamespace} />
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

function useSelected(tcps: TCP[]) {
  const [selected, setSelected] = useState<
    { name: string; namespace: string }[]
  >([]);

  const isSelected = useCallback(
    (tcp: TCP) => {
      return selected.some(
        (s) =>
          s.name === tcp.metadata?.name &&
          s.namespace === tcp.metadata?.namespace
      );
    },
    [selected]
  );

  const setSelect = useCallback(
    (tcp: TCP, selected: boolean) => {
      if (isSelected(tcp) && !selected) {
        setSelected((s) =>
          s.filter(
            (t) =>
              !(
                t.name == tcp.metadata?.name &&
                t.namespace == tcp.metadata?.namespace
              )
          )
        );
        return;
      }
      if (!isSelected(tcp) && selected) {
        setSelected((s) => [
          ...s,
          {
            name: tcp.metadata?.name || "",
            namespace: tcp.metadata?.namespace || "",
          },
        ]);
      }
    },
    [isSelected, setSelected]
  );

  return [
    selected
      .map((s) =>
        tcps.find(
          (tcp) =>
            tcp.metadata?.name === s.name &&
            tcp.metadata.namespace === s.namespace
        )
      )
      .filter(isTruthy),
    isSelected,
    setSelect,
  ] as const;
}

function isTruthy<T>(value?: T | undefined | null | false): value is T {
  return !!value;
}
