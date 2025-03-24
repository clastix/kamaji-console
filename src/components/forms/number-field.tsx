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
            className="block text-sm font-medium"
          >
            {label}
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              className="w-full px-3 py-2 bg-background-input text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input-sm"
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
