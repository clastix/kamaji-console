"use client";
import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import { reactApi } from "@/utils/api";
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import { EditorView } from "codemirror";
import { useState } from "react";
import { Form } from "react-final-form";
import {Button} from "@/components/ui/Button";

export const useCreateDS = () => {
  const openToolbar = useOpenToolbar();
  return () => openToolbar(<CreateDataStore />);
};

export const CreateDataStore = () => {
  const closeToolbar = useCloseToolbar();
  const mut = reactApi.k8s.createDatastore.useMutation({
    onSuccess: () => {
      closeToolbar();
    },
  });
  const [value, setValue] = useState<string>(getBaseYtaml);

  return (
    <Form
      onSubmit={async () => {
        try {
          await mut.mutateAsync({ yaml: value });
        } catch (e) {
          return {
            submit: (e as any)?.message || "unknown error",
          };
        }
      }}
    >
      {({ handleSubmit, submitErrors, submitting }) => (
          <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full bg-base-100 rounded-md shadow-md overflow-hidden"
          >
            <h2 className="px-4 py-3 font-semibold bg-base-200 text-base-content border-b border-base-300">
              Create DataStore
            </h2>
            <div className="h-full">
              <CodeMirror
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
                    setValue(e);
                  }}
                  readOnly={false}
                  value={value}
                  theme={"dark"}
                  height="100%"
                  className="h-full flex-grow"
              />
            </div>
            <div className="min-h-10 p-2">
              {submitErrors?.["submit"] && (
                  <span className="text-red-500">{submitErrors["submit"]}</span>
              )}
            </div>
            <div className="flex items-center px-4 py-3 bg-base-200 border-t border-base-300">
              <Button variant={"ghost"} size={"small"} onClick={() => closeToolbar()} label={'Close'}/>
              <div className="flex-grow"></div>
              <Button
                  type="submit"
                  loading={submitting}
                  size={"small"}
                  label={'Update'}
              />
            </div>
          </form>
      )}
    </Form>
  );
};

const getBaseYtaml = () => {
  return (``+
`apiVersion: kamaji.clastix.io/v1alpha1
kind: DataStore
metadata:
  name: #name 
spec:
  driver: etcd
  endpoints:
    - etcd-0.etcd.kamaji-system.svc.cluster.local:2379
    - etcd-1.etcd.kamaji-system.svc.cluster.local:2379
    - etcd-2.etcd.kamaji-system.svc.cluster.local:2379
  tlsConfig:
    certificateAuthority:
      certificate:
        secretReference:
          keyPath: ca.crt
          name: etcd-certs
          namespace: kamaji-system
      privateKey:
        secretReference:
          keyPath: ca.key
          name: etcd-certs
          namespace: kamaji-system
    clientCertificate:
      certificate:
        secretReference:
          keyPath: tls.crt
          name: root-client-certs
          namespace: kamaji-system
      privateKey:
        secretReference:
          keyPath: tls.key
          name: root-client-certs
          namespace: kamaji-system`).replace(/^\n+/, '');
};
