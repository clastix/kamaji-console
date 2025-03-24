import clsx from "clsx";
import { Field } from "react-final-form";

interface TextFieldProps {
  name: string;
  label: string;
  max?: number;
  numRows?: number;
  type?: "text" | "password";
  size?: "normal" | "sm" | "md" | "lg";
  className?: string;
}

export const TextField = ({
  label,
  name,
  max,
  numRows,
  type = "text",
  size = "normal",
  className,
}: TextFieldProps) => (
  <Field
    type={type}
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
            {numRows ? (
              <textarea
                {...input}
                rows={numRows}
                className={clsx(
                  "block w-full px-3 py-2 bg-background-input text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 input-sm",
                  className
                )}
              />
            ) : (
              <input
                className={clsx(
                  "w-full px-3 py-2 bg-background-input text-white border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  {
                    "input-sm": size === "sm",
                    "input-md": size === "md",
                    "input-lg": size === "lg",
                  },
                  className
                )}
                {...input}
              />
            )}
          </div>
          <div className="mt-1 flex h-5 justify-between text-xs ">
            <span className="text-sm text-red-400">
              {meta.touched && meta.error}
            </span>
            {max && (
              <span className={"text-stone-400"}>
                {input.value.length} / {max}
              </span>
            )}
          </div>
        </div>
      );
    }}
  />
);
