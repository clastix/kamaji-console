import deepEqual from "fast-deep-equal";
import type { ReactNode } from "react";
import { Form, type FormProps, type FormRenderProps } from "react-final-form";
import type { z } from "zod";
import { zodValidate } from "./zod-validate";

export type ZodFormProps<
  Schema extends z.ZodObject<any, any, any>,
  FormValues = z.TypeOf<Schema>,
  InitialFormValues = Partial<FormValues>
> = FormProps<FormValues, InitialFormValues> & {
  schema: Schema;
  children: (
    props: FormRenderProps<FormValues, InitialFormValues>
  ) => ReactNode;
};

export function ZodForm<
  Schema extends z.ZodObject<any, any, any>,
  FormValues = z.TypeOf<Schema>,
  InitialFormValues = Partial<FormValues>
>({
  schema,
  onSubmit,
  children,
  ...props
}: ZodFormProps<Schema, FormValues, InitialFormValues>): React.ReactElement {
  const validate = zodValidate(schema);

  return (
    <Form
      {...props}
      onSubmit={onSubmit}
      initialValues={props.initialValues}
      initialValuesEqual={deepEqual}
      validate={validate}
    >
      {({ ...rest }) => <>{children({ ...rest })}</>}
    </Form>
  );
}
