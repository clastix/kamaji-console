"use client";
import { useCloseToolbar, useOpenToolbar } from "@/components/ui/toolbar";
import { copyToClipboard, downloadText } from "@/components/utils/download";
import { reactApi } from "@/utils/api";
import { StreamLanguage } from "@codemirror/language";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "codemirror";

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
      <h2 className="px-2 py-1 font-semibold">
        Kubeconfig of {tcp.namespace} / {tcp.name}
      </h2>
      <div className="flex-grow overflow-y-scroll">
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
        />
      </div>
      <div className="flex p-2">
        <button
          type="button"
          className="btn-ghost btn-sm btn"
          onClick={() => closeToolbar()}
        >
          close
        </button>
        <div className="flex-grow"> </div>
        <div className="space-x-2">
          <button
            type="button"
            className="btn-outline btn-primary btn-sm btn"
            onClick={() => downloadText(tcp.name + "-kubeconfig.yaml", q.data)}
          >
            download
          </button>
          <button
            type="button"
            className="btn-outline btn-primary btn-sm btn"
            onClick={() => copyToClipboard(q.data)}
          >
            copy to clipboard
          </button>
        </div>
      </div>
    </div>
  );
};
