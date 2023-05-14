import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fragment } from "react";
import { Field } from "react-final-form";

interface SelectFieldProps<T = string> {
  name: string;
  label: string;
  options: PickerOption<T>[];
  makeChoiceText?: string;
}

export function SelectField<T = any>({
  name,
  options,
  label,
  makeChoiceText = "Make a choice",
}: SelectFieldProps<T>) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field<T>
        name={name}
        render={({ input }) => (
          <SelectPicker<T>
            makeChoiceText={makeChoiceText}
            options={options}
            value={input.value}
            setValue={input.onChange}
          />
        )}
      />
    </div>
  );
}

interface PickerOption<T = any> {
  value: T;
  label: string;
}

interface SelectPickerProps<T = any> {
  setValue: (v: T) => void;
  value: T;
  options: PickerOption<T>[];
  makeChoiceText?: string;
}

const SelectPicker = <T,>({
  value,
  setValue,
  options,
  makeChoiceText,
}: SelectPickerProps<T>) => {
  return (
    <Listbox value={value} onChange={setValue}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm">
            <span className="block truncate">
              {options.find((o) => o.value === value)?.label || makeChoiceText}
            </span>
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
                    clsx(
                      active ? "bg-pink-600 text-white" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9"
                    )
                  }
                  value={v.value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={clsx(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate"
                        )}
                      >
                        {v.label}
                      </span>

                      {selected ? (
                        <span
                          className={clsx(
                            active ? "text-white" : "text-pink-600",
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
