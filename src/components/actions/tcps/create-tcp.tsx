"use client";

import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import { reactApi } from "@/utils/api";
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import { useState } from "react";
import { Form } from "react-final-form";
import {Button} from "@/components/ui/Button";

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
          className="flex flex-col h-full bg-base-100 rounded-md shadow-md overflow-hidden"
        >
          <h2 className="px-4 py-3 font-semibold bg-base-200 text-base-content border-b border-base-300">
            Create TCP
          </h2>
          <div className="flex-grow overflow-y-scroll h-full">
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
              className="h-full"
            />
          </div>

          {submitErrors?.["submit"] && (
            <div className="p-2">
              <span className="text-red-500">{submitErrors["submit"]}</span>
            </div>
          )}
          <div className="flex items-center px-4 py-3 bg-base-200 border-t border-base-300">
            <Button variant={"ghost"} size={"small"} onClick={() => closeToolbar()} label={'Close'} />
            <div className="flex-grow"></div>
            <Button
                type="submit"
                loading={submitting}
                size={"small"}
                label={'Create'}
            />
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
      version: v1.31.0
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
