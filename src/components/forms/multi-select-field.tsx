import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Field } from "react-final-form";

interface MultiSelectFieldProps<T = string> {
  name: string;
  label: string;
  options: PickerOption<T>[];
  makeChoiceText?: string;
}

export function MultiSelectField<T = any>({
  name,
  options,
  label,
  makeChoiceText = "Make a choice",
}: MultiSelectFieldProps<T>) {
  return (
    <Field<T[]>
      name={name}
      render={({ input }) => (
        <div className="flex w-full flex-col">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {" "}
            {label}{" "}
          </label>
          <SelectPicker<T>
            makeChoiceText={makeChoiceText}
            options={options}
            values={input.value}
            setValue={input.onChange}
          />
        </div>
      )}
    />
  );
}

interface PickerOption<T = any> {
  value: T;
  label: string;
}

interface SelectPickerProps<T = any> {
  setValue: (v: T[]) => void;
  values: T[];
  options: PickerOption<T>[];
  makeChoiceText: string;
}

const SelectPicker = <T,>({
  values,
  setValue,
  options,
  makeChoiceText,
}: SelectPickerProps<T>) => {
  const currentValues = options.filter((o) => values.includes(o.value));

  return (
    <Listbox
      value={currentValues}
      onChange={(v) => {
        setValue(v.map((v) => v.value));
      }}
      multiple={true}
    >
      {({ open }) => (
        <div className="relative mt-1">
          <Listbox.Button className="s relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
            {currentValues.length === 0 ? (
              <span className="block truncate">{makeChoiceText}</span>
            ) : (
              <span className="block truncate">
                {currentValues.length} Selected
              </span>
            )}

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((v) => (
                <Listbox.Option
                  key={v.label}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-indigo-600 text-white" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9"
                    )
                  }
                  value={v}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {v.label}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
