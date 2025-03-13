"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { create } from "zustand";

type ToolbarState = {
  toolbar: ReactNode | null;
  open: boolean;
  setToolbar: (toolbar: ReactNode) => void;
  closeToolbar: () => void;
};

const useToolbarStore = create<ToolbarState>((set) => ({
  toolbar: null,
  open: false,
  closeToolbar: () => set({ open: false }),
  setToolbar: (toolbar) => set({ toolbar, open: true }),
}));

export const useOpenToolbar = () => {
  return useToolbarStore((s) => s.setToolbar);
};

export const useCloseToolbar = () => {
  return useToolbarStore((s) => s.closeToolbar);
};

export function ToolBarContainer() {
  const { open, toolbar, closeToolbar } = useToolbarStore();
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 flex justify-end"
          onClose={closeToolbar}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="w-full max-w-5xl flex-1">
              <div className="h-full bg-white">{toolbar}</div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
