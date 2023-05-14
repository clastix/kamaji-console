import { ValidationErrors } from "final-form";
import type { z } from "zod";

type ErrPath = ValidationErrors;

export const zodValidate =
  (schema: z.Schema) =>
  (values: unknown): ErrPath => {
    const res = schema.safeParse(values);
    if (!res.success) {
      return flatternZodError(res.error);
    }
    return {};
  };

function flatternZodError(err: z.ZodError): ErrPath {
  return err.errors.reduce(
    (prev, e) => ({
      ...prev,
      [e.path.join(".")]: e.message,
    }),
    {} as ErrPath
  );
}
