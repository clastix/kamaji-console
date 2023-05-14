import { TextField } from "@/components/forms/text-field";
import { useCloseDialog, useCreateDialog } from "@/components/ui/dialog";
import { ZodForm } from "@/components/zod-form/form";
import { reactApi } from "@/utils/api";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { FORM_ERROR } from "final-form";
import { z } from "zod";

interface DeleteTCP {
  name: string;
  namespace: string;
}

export const useDeleteTCPs = () => {
  const openDialog = useCreateDialog();
  return (tpcs: DeleteTCP[]) => openDialog(<DeleteTCPsDialog tcps={tpcs} />);
};

const CheckSchema = z.object({
  check: z.literal("DELETE"),
});

const DeleteTCPsDialog = ({ tcps }: { tcps: DeleteTCP[] }) => {
  const closeDialog = useCloseDialog();
  const utils = reactApi.useContext();
  const deleteMut = reactApi.k8s.deleteTcps.useMutation({
    onSuccess: async () => {
      await utils.k8s.getClastixTCP.invalidate();
      closeDialog();
    },
  });

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-orange-600"
      >
        Delete {tcps.length} Tenant Control Plane(s)
      </Dialog.Title>
      <ZodForm
        schema={CheckSchema}
        onSubmit={async () => {
          try {
            const res = await deleteMut.mutateAsync(tcps);
          } catch (e) {
            return {
              [FORM_ERROR]: (e as Error)?.message || "Something went wrong",
            };
          }
        }}
      >
        {({ handleSubmit, submitting, invalid, submitErrors }) => (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <TextField label={`Type \`DELETE\` to procede`} name="check" />
            <div>
              {submitErrors?.[FORM_ERROR] && (
                <span className="text-sm text-red-500">
                  {submitErrors[FORM_ERROR]}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={invalid || submitting}
                className={clsx("btn-error btn-sm btn", {
                  loading: submitting,
                })}
              >
                Delete
              </button>
            </div>
          </form>
        )}
      </ZodForm>
    </>
  );
};
