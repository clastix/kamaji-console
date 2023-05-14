import { CircleStackIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import type { IoClastixKamajiV1alpha1DataStore } from "../../../../gen/api";
import { formatAge } from "../../../utils/format-age";

export const DatastoreDetails = ({
  datastore,
}: {
  datastore: IoClastixKamajiV1alpha1DataStore;
}) => {
  const driver = datastore.spec?.driver;
  const age = formatAge(datastore.metadata?.creationTimestamp);
  return (
    <div>
      <div className="mt-2 flex flex-col space-y-1">
        <div className="flex h-8 items-center align-baseline">
          <span className="mr-4 text-gray-400">Driver</span>
          <CircleStackIcon className="mr-1 w-4" />
          <span>
            <span> {driver} </span>
          </span>
        </div>
        <div className="flex h-8 items-center align-baseline">
          <span className="mr-4 text-gray-400">Age</span>
          <ClockIcon className="mr-1 w-4" />
          <span>
            <span> {age} </span>
          </span>
        </div>
      </div>
      <DatastoreUsedByTable tcps={datastore.status?.usedBy || []} />
    </div>
  );
};

const DatastoreUsedByTable = ({ tcps }: { tcps: string[] }) => {
  const router = useRouter();
  if (tcps.length === 0) {
    return (
      <div className="flex h-16 items-center justify-center">
        <span className="text-gray-400">No Tenant Control Planes</span>
      </div>
    );
  }

  const tcpsWithNS = tcps.map((tcp) => {
    const [ns, name] = tcp.split("/");
    return { ns, name, id: tcp };
  });

  return (
    <div className="mt-10 overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Used By</th>
          </tr>
        </thead>
        <tbody>
          {tcpsWithNS.map((t) => (
            <tr
              key={t.id}
              className="hover cursor-pointer"
              onClick={() => {
                router.push(`/dashboard/tcps/${t.id}`);
              }}
            >
              <td>
                {t.ns}/<strong>{t.name}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
