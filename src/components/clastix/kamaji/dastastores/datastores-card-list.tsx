import Link from "next/link";
import { type IoClastixKamajiV1alpha1DataStore } from "../../../../gen/api";
import { DataStoreCard } from "./datastore-card";

export const DataStoresCardList = ({
  dss,
}: {
  dss: IoClastixKamajiV1alpha1DataStore[];
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {dss.map((ds) => {
        const name = ds.metadata?.name || "";
        return (
          <Link
            key={ds.metadata?.uid}
            href={`/dashboard/datastores/${name}`}
            className="duration-2 overflow-hidden rounded shadow-sm ring-2 ring-gray-200 transition-shadow hover:shadow-md hover:ring-primary-400"
          >
            <DataStoreCard ds={ds} />
          </Link>
        );
      })}
    </div>
  );
};
