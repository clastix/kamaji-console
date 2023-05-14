import { type KubernetesObject } from "@kubernetes/client-node";
import yaml from "yaml";
import { downloadText } from "@/components/utils/download";

export const useDownloadReources = () => {
  return (objs: KubernetesObject[], name: string) => {
    const file = objs
      .map((o) => {
        const doc = new yaml.Document();
        doc.contents = o as any;
        return doc.toString();
      })
      .join("\n---\n");
    downloadText(`${name}.yaml`, file);
  };
};
