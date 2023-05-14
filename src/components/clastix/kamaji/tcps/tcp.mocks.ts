import type { IoClastixKamajiV1alpha1TenantControlPlane } from "../../../../gen/api";

export function createMockTCP(name: string, status: string) {
  return {
    apiVersion: "kamaji.clastix.io/v1alpha1",
    kind: "TenantControlPlane",
    metadata: {
      creationTimestamp: new Date(),
      finalizers: [],
      generation: 1,
      managedFields: [],
      name: name,
      namespace: "default",
      resourceVersion: "132512",
      uid: "ddc82f58-a289-46b4-8438-ff49d84fd16a",
    },
    spec: {
      addons: {
        coreDNS: {},
        kubeProxy: {},
      },
      controlPlane: {
        deployment: {
          additionalMetadata: {},
          replicas: 1,
        },
        service: {
          additionalMetadata: {},
          serviceType: "ClusterIP",
        },
      },
      dataStore: "kamaji-etcd",
      kubernetes: {
        admissionControllers: ["ResourceQuota", "LimitRanger"],
        kubelet: {
          cgroupfs: "cgroupfs",
        },
        version: "v1.25.4",
      },
      networkProfile: {
        dnsServiceIPs: ["10.96.0.10"],
        podCidr: "10.244.0.0/16",
        port: 6443,
        serviceCidr: "10.96.0.0/16",
      },
    },
    status: {
      addons: {
        coreDNS: {
          enabled: true,
          lastUpdate: new Date(),
        },
        konnectivity: {
          agent: {},
          certificate: {},
          clusterrolebinding: {},
          configMap: {},
          enabled: false,
          kubeconfig: {},
          sa: {},
          service: {
            loadBalancer: {},
            name: "",
            namespace: "",
            port: 0,
          },
        },
        kubeProxy: {
          enabled: true,
          lastUpdate: new Date(),
        },
      },
      certificates: {
        apiServer: {
          checksum: "a854865c2d95c63770b55401cd84de11",
          lastUpdate: new Date(),
          secretName: "test2-api-server-certificate",
        },
        apiServerKubeletClient: {
          checksum: "6fc8ea1e2c07ff71ba549f87a042e9b1",
          lastUpdate: new Date(),
          secretName: "test2-api-server-kubelet-client-certificate",
        },
        ca: {
          checksum: "6a46f4f7feb3ed8a6f53321a8ee57b02",
          lastUpdate: new Date(),
          secretName: "test2-ca",
        },
        frontProxyCA: {
          checksum: "6754f5dc996814cfb03461449b1a3aea",
          lastUpdate: new Date(),
          secretName: "test2-front-proxy-ca-certificate",
        },
        frontProxyClient: {
          checksum: "3b8f26e304200167aec1c3e32c37b138",
          lastUpdate: new Date(),
          secretName: "test2-front-proxy-client-certificate",
        },
        sa: {
          checksum: "438048fcbb18dbaf651a5f1bcc4fde7c",
          lastUpdate: new Date(),
          secretName: "test2-sa-certificate",
        },
      },
      controlPlaneEndpoint: "10.96.101.188:6443",
      kubeadmPhase: {
        bootstrapToken: {
          checksum: "d82bfc79647e2c81495ec8c12126be53",
          lastUpdate: new Date(),
        },
      },
      kubeadmconfig: {
        checksum: "77561c57292abc9a809baa979a47e854",
        configmapName: "test2-kubeadmconfig",
        lastUpdate: new Date(),
      },
      kubeconfig: {
        admin: {
          checksum: "d1088e160ee24877a5a53cc3ae36d5e3",
          lastUpdate: new Date(),
          secretName: "test2-admin-kubeconfig",
        },
        controllerManager: {
          checksum: "47706bccdd6c60874b812a4f3ae8ded5",
          lastUpdate: new Date(),
          secretName: "test2-controller-manager-kubeconfig",
        },
        scheduler: {
          checksum: "47706bccdd6c60874b812a4f3ae8ded5",
          lastUpdate: new Date(),
          secretName: "test2-scheduler-kubeconfig",
        },
      },
      kubernetesResources: {
        deployment: {
          availableReplicas: 1,
          conditions: [
            {
              lastTransitionTime: new Date(),
              lastUpdateTime: new Date(),
              message: "Deployment has minimum availability.",
              reason: "MinimumReplicasAvailable",
              status: "True",
              type: "Available",
            },
            {
              lastTransitionTime: new Date(),
              lastUpdateTime: new Date(),
              message:
                'ReplicaSet "test2-54b879ccd8" has successfully progressed.',
              reason: "NewReplicaSetAvailable",
              status: "True",
              type: "Progressing",
            },
          ],
          lastUpdate: new Date(),
          name: "test2",
          namespace: "default",
          observedGeneration: 1,
          readyReplicas: 1,
          replicas: 1,
          selector: "kamaji.clastix.io/soot=test2",
          updatedReplicas: 1,
        },
        service: {
          loadBalancer: {},
          name: "test2",
          namespace: "default",
          port: 6443,
        },
        version: {
          status: status,
          version: "v1.25.4",
        },
      },
      storage: {
        certificate: {
          checksum: "c6271b7e9c156af258bc8e7b2d4d39fd",
          lastUpdate: new Date(),
          secretName: "test2-datastore-certificate",
        },
        config: {
          checksum: "5d635b6a042f876896f83ae8e97f0c05",
          secretName: "test2-datastore-config",
        },
        dataStoreName: "kamaji-etcd",
        driver: "etcd",
        setup: {
          checksum: "5d635b6a042f876896f83ae8e97f0c05",
          lastUpdate: new Date(),
          schema: "default_test2",
          user: "default_test2",
        },
      },
    },
  } as unknown as IoClastixKamajiV1alpha1TenantControlPlane;
}
