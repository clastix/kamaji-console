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

export const useCreateTCP = () => {
  const openToolbar = useOpenToolbar();
  return () => openToolbar(<CreateTCP />);
};

const CreateTCP = () => {
  const closeToolbar = useCloseToolbar();
  const mut = reactApi.k8s.createTcp.useMutation({
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
          <h2 className="px-2 py-1 font-semibold"> Create TCP</h2>
          <div className="flex-grow overflow-y-scroll">
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
              className=""
            />
          </div>

          {submitErrors?.["submit"] && (
            <div className="p-2">
              <span className="text-red-500">{submitErrors["submit"]}</span>
            </div>
          )}
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
  return `
  apiVersion: kamaji.clastix.io/v1alpha1
  kind: TenantControlPlane
  metadata:
    name: #name
    namespace: #namespace
  spec:
    dataStore: default
    controlPlane:
      deployment:
        replicas: 2
      service:
        serviceType: LoadBalancer
    kubernetes:
      version: v1.25.2
      kubelet:
        cgroupfs: systemd
    networkProfile:
      port: 6443
    addons:
      coreDNS: {}
      kubeProxy: {}
      konnectivity:
        server:
          port: 8132
          resources: {}
        agent: {}
	`;
};
