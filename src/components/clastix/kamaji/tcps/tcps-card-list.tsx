import Link from "next/link";
import { IoClastixKamajiV1alpha1TenantControlPlane } from "../../../../gen/api";
import { TenantControlPlaneCard } from "./tcp-card";

export const TCPsCardList = ({
  tcps,
}: {
  tcps: IoClastixKamajiV1alpha1TenantControlPlane[];
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tcps.map((t) => {
        const name = t.metadata?.name || "";
        const namespace = t.metadata?.namespace || "";
        return (
          <Link
            key={t.metadata?.uid}
            href={`/dashboard/tcps/${namespace}/${name}`}
            className="duration-2 overflow-hidden rounded shadow-sm ring-2 ring-gray-200 transition-shadow hover:shadow-md hover:ring-primary-400"
          >
            <TenantControlPlaneCard tcp={t} />
          </Link>
        );
      })}
    </div>
  );
};
