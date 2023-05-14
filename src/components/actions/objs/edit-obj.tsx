"use client";
import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import { reactApi } from "@/utils/api";
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { KubernetesObject } from "@kubernetes/client-node";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import { EditorView } from "codemirror";
import { FORM_ERROR } from "final-form";
import { Field, Form } from "react-final-form";
import yaml from "yaml";
import { z } from "zod";

const ToolbarYamlSchema = z.object({
  yaml: z.string(),
});

export const useEditKubernetesObject = () => {
  const openToolbar = useOpenToolbar();
  return (obj: KubernetesObject, editable: boolean) =>
    openToolbar(<EditKubernetesObject obj={obj} editable={editable} />);
};

const EditKubernetesObject = ({
  obj,
  editable,
}: {
  obj: KubernetesObject;
  editable: boolean;
}) => {
  const closeToolbar = useCloseToolbar();
  const mut = reactApi.k8s.apply.useMutation({
    onSuccess: () => {
      closeToolbar();
    },
  });

  const doc = new yaml.Document();
  doc.contents = obj as any;

  const kind = obj.kind;
  const name = obj.metadata?.name || "";
  const namespace = obj.metadata?.namespace || "";

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
          className="flex h-screen max-h-screen flex-col"
        >
          <h2 className="px-2 py-1 font-semibold">
            {kind} {namespace} / {name}
          </h2>
          <div className="flex-grow overflow-y-scroll">
            <Field<string> type="text" name="yaml">
              {({ input }) => {
                return (
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
                    height="100%"
                  />
                );
              }}
            </Field>
          </div>
          {submitErrors?.[FORM_ERROR] && (
            <div className="min-h-10">
              <div className="text-sm text-red-500">
                {submitErrors[FORM_ERROR]}
              </div>
            </div>
          )}

          <div className="flex p-2">
            <button
              type="button"
              className="btn-ghost btn-sm btn"
              onClick={() => closeToolbar()}
            >
              close
            </button>
            <div className="flex-grow"> </div>

            {editable && (
              <button
                type="submit"
                disabled={invalid}
                className={clsx("btn-primary btn-sm btn", {
                  loading: submitting,
                })}
              >
                update
              </button>
            )}
          </div>
        </form>
      )}
    </Form>
  );
};
