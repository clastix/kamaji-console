import { type ReactNode } from "react";
import { create } from "zustand";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type DialogState = {
  dialog: ReactNode | null;
  open: boolean;
  setDialog: (dialog: ReactNode) => void;
  closeDialog: () => void;
};

const useDialogStore = create<DialogState>((set) => ({
  dialog: null,
  open: false,
  closeDialog: () => set({ open: false }),
  setDialog: (dialog) => set({ dialog, open: true }),
}));

export const useCreateDialog = () => {
  return useDialogStore((s) => s.setDialog);
};

export const useCloseDialog = () => {
  return useDialogStore((s) => s.closeDialog);
};

export const DialogProvider = () => {
  const { dialog, closeDialog, open } = useDialogStore();

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background-modalPanel p-6 text-left align-middle shadow-xl transition-all">
                  {dialog}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
