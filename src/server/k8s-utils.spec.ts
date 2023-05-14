import { type IoClastixKamajiV1alpha1TenantControlPlane } from "@/gen/api";
import { describe, expect, it } from "vitest";
import { replaceKubeconfigWithInternalConn } from "./k8s-utils";

describe("k8s-utils", () => {
  it("should replace with tcp service", () => {
    const testTcp: IoClastixKamajiV1alpha1TenantControlPlane = {
      status: {
        kubernetesResources: {
          service: {
            name: "test",
            namespace: "ns",
            port: 6443,
          },
        },
      },
    };

    const kubeconfig = `apiVersion: v1
clusters:
- cluster:
	certificate-authority-data: xxxxx
	server: https://192.168.1.5:6443
name: test
contexts:
- context:
	cluster: test
	user: kubernetes-admin
name: kubernetes-admin@test
current-context: kubernetes-admin@test
kind: Config
preferences: {}
users:
- name: kubernetes-admin
user:
	client-certificate-data: xxxx
	client-key-data: xxxx
`;

    const expectedKubeconfig = `apiVersion: v1
clusters:
- cluster:
	certificate-authority-data: xxxxx
	server: https://test.ns.svc.cluster.local:6443
name: test
contexts:
- context:
	cluster: test
	user: kubernetes-admin
name: kubernetes-admin@test
current-context: kubernetes-admin@test
kind: Config
preferences: {}
users:
- name: kubernetes-admin
user:
	client-certificate-data: xxxx
	client-key-data: xxxx
`;

    const data = replaceKubeconfigWithInternalConn(kubeconfig, testTcp);
    expect(data).toBe(expectedKubeconfig);
  });
});
