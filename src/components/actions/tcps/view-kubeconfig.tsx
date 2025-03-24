"use client";
import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import { copyToClipboard, downloadText } from "@/components/utils/download";
import { reactApi } from "@/utils/api";
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";
import {Button} from "@/components/ui/Button";
import type { IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";

interface TCP {
  name: string;
  namespace: string;
}

export const useViewKubeconfig = () => {
  const openToolbar = useOpenToolbar();
  return (tcp: TCP) => openToolbar(<ViewKubeconfig tcp={tcp} />);
};

const ViewKubeconfig = ({ tcp }: { tcp: TCP }) => {
  const closeToolbar = useCloseToolbar();
  const q = reactApi.k8s.getClastixTPCKubeConfig.useQuery(tcp, {
    suspense: true,
  });

  if (!q.data) return null;

  return (
    <div className="flex h-screen max-h-screen flex-col">
      <h2 className="px-4 py-3 font-semibold bg-base-200 text-base-content border-b border-base-300">
        Kubeconfig of {tcp.namespace} / {tcp.name}
      </h2>
      <div className="flex-grow overflow-y-scroll h-full">
        <CodeMirror
          editable={false}
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
          readOnly={true}
          value={q.data}
          height="100%"
          theme={"dark"}
          className="h-full"
        />
      </div>
      <div  className="flex items-center px-4 py-3 bg-base-200 border-t border-base-300">
        <Button onClick={() => closeToolbar()} label={'close'} />
        <div className="flex-grow"> </div>
        <div className="space-x-2">
          <Button label={'download'} onClick={() => downloadText(tcp.name + "-kubeconfig.yaml", q.data)} />
          <Button label={'copy to clipboard'} onClick={() => copyToClipboard(q.data)} />
        </div>
      </div>
    </div>
  );
};
