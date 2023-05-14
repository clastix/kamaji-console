import { TextField } from "@/components/forms/text-field";
import { useCloseDialog, useCreateDialog } from "@/components/ui/dialog";
import { ZodForm } from "@/components/zod-form/form";
import { reactApi } from "@/utils/api";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { FORM_ERROR } from "final-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

interface DataStore {
  name: string;
}

export const useDeleteDS = () => {
  const openDialog = useCreateDialog();
  return (ds: DataStore) => openDialog(<DeleteDialog ds={ds} />);
};

const DeleteDialog = ({ ds }: { ds: DataStore }) => {
  const router = useRouter();
  const closeDialog = useCloseDialog();
  const utils = reactApi.useContext();
  const deleteMut = reactApi.k8s.deleteDatastore.useMutation({
    onSuccess: async () => {
      await utils.k8s.getClastixDastastore.invalidate();
      router.push("/dashboard/datastores");
      closeDialog();
    },
  });

  const name = ds.name;

  const CheckSchema = z.object({
    check: z.literal(name),
  });

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-orange-600"
      >
        Delete DataStore {name}
      </Dialog.Title>
      <ZodForm
        schema={CheckSchema}
        onSubmit={async () => {
          try {
            const res = await deleteMut.mutateAsync({
              name,
            });
          } catch (e) {
            return {
              [FORM_ERROR]: (e as Error)?.message || "Something went wrong",
            };
          }
        }}
      >
        {({ handleSubmit, submitting, invalid, submitErrors }) => (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <TextField label={`Type \`${name}\` to procede`} name="check" />
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
                className={clsx("btn btn-error btn-sm", {
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
