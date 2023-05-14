import { CircleStackIcon } from "@heroicons/react/24/outline";
import type { IoClastixKamajiV1alpha1DataStore } from "../../../../gen/api";
import { formatAge } from "../../../utils/format-age";

export const DataStoreCard = ({
  ds,
}: {
  ds: IoClastixKamajiV1alpha1DataStore;
}) => {
  return (
    <div className="relative aspect-square h-44 w-44 overflow-hidden rounded ring-1 ring-gray-200">
      <div className="border-b bg-gray-100 px-2 py-2">
        <h3 className="text-sm">
          <span className="font-bold text-gray-800">{ds.metadata?.name}</span>
        </h3>
      </div>
      <div className="mt-2 flex flex-col space-y-1">
        <div className="flex px-2 align-baseline text-xs">
          <CircleStackIcon className="mr-1 w-4" />
          <span> {ds.spec?.driver} </span>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-between border-t-[1px] bg-gray-100 px-2 py-1">
        <div className="flex items-center text-xs"></div>
        <div className="text-xs">
          {formatAge(ds.metadata?.creationTimestamp)}
        </div>
      </div>
    </div>
  );
};
