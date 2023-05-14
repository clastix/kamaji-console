"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { reactApi } from "../../../../utils/api";

interface Namespace {
  name: string;
  label: string;
}

export const NameSpaceSwith = ({
  namespace,
  setNamespace,
}: {
  namespace: string;
  setNamespace: (namespace: string) => void;
}) => {
  const q = reactApi.k8s.listNamespaces.useQuery();
  if (q.error || q.isLoading) return null;

  let namespaces: Namespace[] = q.data
    .map((i) => ({ name: i.metadata?.name }))
    .map((ns) => ({
      name: ns.name!,
      label: ns.name!,
    }));
  namespaces = [{ name: "*", label: "All Namespaces" }, ...namespaces];

  const currentNs = namespaces.find((n) => n.name === namespace);

  return (
    <div>
      <Listbox
        value={namespace}
        onChange={(ns) => {
          setNamespace(ns);
        }}
      >
        <div className="relative">
          <Listbox.Button className="relative h-8 w-64 cursor-default rounded-lg py-1 pl-3 pr-10 text-left text-primary-700 ring-1 ring-primary-400 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{currentNs?.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-4 w-4 text-primary-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {namespaces.map((ns, nsIdx) => (
                <Listbox.Option
                  key={nsIdx}
                  className={({ active }) =>
                    `relative z-50 cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primary-100 text-primary-900"
                        : "text-gray-900"
                    }`
                  }
                  value={ns.name}
                >
                  {({ selected }) => {
                    const isActive =
                      (selected || currentNs?.name == "*") && ns.name != "*";
                    return (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {ns.label}
                        </span>
                        {isActive ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    );
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

function updateUrl() {}
