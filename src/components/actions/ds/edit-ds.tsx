import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import { IoClastixKamajiV1alpha1DataStore } from "@/gen/api";
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

export const useEditDS = () => {
  const openToolbar = useOpenToolbar();
  return (ds: IoClastixKamajiV1alpha1DataStore, editable: boolean) =>
    openToolbar(<EditDataStore ds={ds} editable={editable} />);
};

const EditDataStore = ({
  ds,
  editable,
}: {
  ds: IoClastixKamajiV1alpha1DataStore;
  editable: boolean;
}) => {
  const closeToolbar = useCloseToolbar();
  const mut = reactApi.k8s.apply.useMutation({
    onSuccess: () => {
      closeToolbar();
    },
  });
  const doc = new yaml.Document();
  if (!!ds.metadata?.managedFields) {
    delete ds.metadata.managedFields;
  }
  doc.contents = ds as any;

  const name = ds.metadata?.name || "";

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
                Datastore {name}
              </h2>
              <div className="flex-grow overflow-hidden">
                <Field<string> type="text" name="yaml">
                  {({ input }) => {
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
                              readOnly={false}
                              value={input.value}
                              theme={"dark"}
                              height="100%"
                              className="h-full"
                          />
                        </div>
                    );
                  }}
                </Field>
              </div>
              {submitErrors?.[FORM_ERROR] && (
                  <div className="px-4 py-2 bg-error bg-opacity-10">
                    <div className="text-sm text-error">
                      {submitErrors[FORM_ERROR]}
                    </div>
                  </div>
              )}

              <div className="flex items-center px-4 py-3 bg-base-200 border-t border-base-300">
                <Button variant={"ghost"} size={"small"} onClick={() => closeToolbar()} label={'Close'} />
                <div className="flex-grow"></div>
                {editable && (
                    <Button
                        type="submit"
                        disabled={invalid}
                        loading={submitting}
                        size={"small"}
                        label={'Update'}
                    />
                )}
              </div>
            </form>
        )}
      </Form>
  );
};
