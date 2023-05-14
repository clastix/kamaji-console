import { ZodForm } from "@/components/zod-form/form";
import { NumberInputField } from "@/components/forms/number-field";
import { useCloseDialog, useCreateDialog } from "@/components/ui/dialog";
import { IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";
import { reactApi } from "@/utils/api";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { z } from "zod";

export const useScaleTcp = () => {
  const openDialog = useCreateDialog();
  return (tcp: IoClastixKamajiV1alpha1TenantControlPlane) =>
    openDialog(<ScaleDialog tcp={tcp} />);
};

const ScaleSchema = z.object({
  replicas: z.number().min(0),
});

const ScaleDialog = ({
  tcp,
}: {
  tcp: IoClastixKamajiV1alpha1TenantControlPlane;
}) => {
  const closeDialog = useCloseDialog();
  const utils = reactApi.useContext();
  const scaleMut = reactApi.k8s.scaleTcp.useMutation({
    onSuccess: async () => {
      await utils.k8s.getClastixTCP.invalidate();
      closeDialog();
    },
  });

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Scale Tenant Control Plane {tcp.metadata?.name}
      </Dialog.Title>
      <ZodForm
        schema={ScaleSchema}
        initialValues={{
          replicas: tcp.spec?.controlPlane?.deployment?.replicas || 0,
        }}
        onSubmit={async (value) => {
          const res = await scaleMut.mutateAsync({
            ...value,
            name: tcp.metadata?.name!,
            namespace: tcp.metadata?.namespace!,
          });
          console.log(res);
        }}
      >
        {({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <NumberInputField label="Replicas" name="replicas" />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={invalid || submitting}
                className={clsx("btn-primary btn-sm btn", {
                  loading: submitting,
                })}
              >
                Scale
              </button>
            </div>
          </form>
        )}
      </ZodForm>
    </>
  );
};
