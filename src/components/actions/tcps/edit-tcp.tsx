"use client";
import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import type { IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";
import { reactApi } from "@/utils/api";
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import { EditorView } from "codemirror";
import { FORM_ERROR } from "final-form";
import { Field, Form } from "react-final-form";
import yaml from "yaml";
import { z } from "zod";
import {Button} from "@/components/ui/Button";

const ToolbarYamlSchema = z.object({
  yaml: z.string(),
});

export const useEditTenantControlPlane = () => {
  const openToolbar = useOpenToolbar();
  return (tcp: IoClastixKamajiV1alpha1TenantControlPlane, editable: boolean) =>
    openToolbar(<EditTenantControlPlane tcp={tcp} editable={editable} />);
};

const EditTenantControlPlane = ({
  tcp,
  editable,
}: {
  tcp: IoClastixKamajiV1alpha1TenantControlPlane;
  editable: boolean;
}) => {
  const closeToolbar = useCloseToolbar();
  const mut = reactApi.k8s.apply.useMutation({
    onSuccess: () => {
      closeToolbar();
    },
  });

  const doc = new yaml.Document();
  if (!!tcp.metadata?.managedFields) {
    delete tcp.metadata.managedFields;
  }
  doc.contents = tcp as any;

  const name = tcp.metadata?.name || "";
  const namespace = tcp.metadata?.namespace || "";

  return (
    <Form
      initialValues={{
        yaml: doc.toString(),
      }}
      schema={ToolbarYamlSchema}
      onSubmit={async ({ yaml }) => {
        try {
          await mut.mutateAsync({ yaml });
        } catch (e) {
          return {
            [FORM_ERROR]: (e as Error)?.message || "Something went wrong",
          };
        }
      }}
    >
      {({ handleSubmit, submitErrors, submitting, invalid }) => (
          <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full bg-base-100 rounded-md shadow-md overflow-hidden"
          >
            <h2 className="px-4 py-3 font-semibold bg-base-200 text-base-content border-b border-base-300">
              TCP {namespace} / {name}
            </h2>
            <div className="flex-grow overflow-y-scroll scrollbar-thin">
              <Field<string> type="text" name="yaml">
                {({input}) => {
                  return (
                      <div className="h-full">
                        <CodeMirror
                            editable={editable}
                            extensions={[
                              EditorView.lineWrapping,
                              StreamLanguage.define(yamlMode.yaml),
                            ]}
                            basicSetup={{
                              foldGutter: true,
                              foldKeymap: true,
                              lineNumbers: true,
                              closeBrackets: true,
                            }}
                            onChange={(e) => {
                              input.onChange(e);
                            }}
                            theme="dark"
                            readOnly={false}
                            value={input.value}
                            height="100%"
                            className="h-full text-sm"
                        />
                      </div>
                  );
                }}
              </Field>
            </div>
            {submitErrors?.[FORM_ERROR] && (
                <div className="min-h-10 px-3 py-2 bg-red-900 bg-opacity-25">
                  <div className="text-sm text-red-400">
                    {submitErrors[FORM_ERROR]}
                  </div>
                </div>
            )}

            <div className="flex items-center px-4 py-3 bg-base-200 border-t border-base-300">
              <Button
                variant={"ghost"}
                onClick={() => closeToolbar()}
                label={'close'}
              />
              <div className="flex-grow"></div>

              {editable && (
                  <Button
                      type={"submit"}
                      loading={submitting}
                      disabled={invalid}
                      label={'update'}
                  />
              )}
            </div>
          </form>
      )}
    </Form>
  );
};
