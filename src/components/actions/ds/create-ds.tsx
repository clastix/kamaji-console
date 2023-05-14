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
          className="flex h-screen max-h-screen flex-col"
        >
          <h2 className="px-2 py-1 font-semibold"> Create DataStore</h2>
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
            className="flex-grow"
          />

          <div className="min-h-10 p-2">
            {submitErrors?.["submit"] && (
              <span className="text-red-500">{submitErrors["submit"]}</span>
            )}
          </div>
          <div className="flex h-16 items-center px-2">
            <button
              type="button"
              className="btn-ghost btn-sm btn"
              onClick={() => closeToolbar()}
            >
              close
            </button>
            <div className="flex-grow"> </div>
            <button
              type="submit"
              className={clsx("btn-primary btn-sm btn", {
                loading: submitting,
              })}
            >
              create
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

const getBaseYtaml = () => {
  return `apiVersion: kamaji.clastix.io/v1alpha1
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
          namespace: kamaji-system
`;
};
