import { Field } from "react-final-form";

interface NumberInputFieldProps {
  name: string;
  label: string;
}

export const NumberInputField = ({ label, name }: NumberInputFieldProps) => (
  <Field
    type="number"
    name={name}
    id={name}
    render={({ input, meta }) => {
      return (
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <div className="mt-1 flex  rounded-md shadow-sm">
            <input
              className="input-primary input input-sm w-full"
              {...input}
              onChange={(e) => input.onChange(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="mt-1 flex h-5 justify-between text-xs">
            <span className="text-sm text-red-400">{meta.error}</span>
          </div>
        </div>
      );
    }}
  />
);
