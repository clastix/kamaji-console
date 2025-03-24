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
import {Button} from "@/components/ui/Button";

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
          className="flex flex-col h-full bg-base-100 rounded-md shadow-md overflow-hidden"
        >
          <h2 className="px-4 py-3 font-semibold bg-base-200 text-base-content border-b border-base-300">
            {kind} {namespace} / {name}
          </h2>
          <div className="flex-grow overflow-y-scroll">
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
            <div className="min-h-10">
              <div className="text-sm text-red-500">
                {submitErrors[FORM_ERROR]}
              </div>
            </div>
          )}

          <div className="flex items-center px-4 py-3 bg-base-200 border-t border-base-300">
            <Button variant={"ghost"} size={"small"} onClick={() => closeToolbar()} label={'Close'} />
            <div className="flex-grow"> </div>
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
