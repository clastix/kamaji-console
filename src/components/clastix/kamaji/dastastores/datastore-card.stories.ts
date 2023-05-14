import type { Meta, StoryObj } from "@storybook/react";
import { DataStoreCard } from "./datastore-card";
import type { IoClastixKamajiV1alpha1DataStore } from "../../../../gen/api";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof DataStoreCard> = {
  title: "Clastix/Kamaji/DataStoreCard",
  component: DataStoreCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DataStoreCard>;

export const Ready: Story = {
  args: {
    ds: testDatastore("kamaji-etcd"),
  },
};

function testDatastore(name: string) {
  return {
    apiVersion: "kamaji.clastix.io/v1alpha1",
    kind: "DataStore",
    metadata: {
      annotations: {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"kamaji.clastix.io/v1alpha1","kind":"DataStore","metadata":{"annotations":{},"name":"kamaji-etcd"},"spec":{"basicAuth":null,"driver":"etcd","endpoints":["etcd-0.etcd.kamaji-system.svc.cluster.local:2379","etcd-1.etcd.kamaji-system.svc.cluster.local:2379","etcd-2.etcd.kamaji-system.svc.cluster.local:2379"],"tlsConfig":{"certificateAuthority":{"certificate":{"secretReference":{"keyPath":"ca.crt","name":"etcd-certs","namespace":"kamaji-system"}},"privateKey":{"secretReference":{"keyPath":"ca.key","name":"etcd-certs","namespace":"kamaji-system"}}},"clientCertificate":{"certificate":{"secretReference":{"keyPath":"tls.crt","name":"root-client-certs","namespace":"kamaji-system"}},"privateKey":{"secretReference":{"keyPath":"tls.key","name":"root-client-certs","namespace":"kamaji-system"}}}}}}\n',
      },
      creationTimestamp: "2023-01-11T22:04:44.000Z",
      generation: 1,
      managedFields: [],
      name: name,
      resourceVersion: "141012",
      uid: "41ee15d9-5663-4fee-85e9-896d1056b680",
    },
    spec: {
      driver: "etcd",
      endpoints: [
        "etcd-0.etcd.kamaji-system.svc.cluster.local:2379",
        "etcd-1.etcd.kamaji-system.svc.cluster.local:2379",
        "etcd-2.etcd.kamaji-system.svc.cluster.local:2379",
      ],
      tlsConfig: {
        certificateAuthority: {
          certificate: {
            secretReference: {
              keyPath: "ca.crt",
              name: "etcd-certs",
              namespace: "kamaji-system",
            },
          },
          privateKey: {
            secretReference: {
              keyPath: "ca.key",
              name: "etcd-certs",
              namespace: "kamaji-system",
            },
          },
        },
        clientCertificate: {
          certificate: {
            secretReference: {
              keyPath: "tls.crt",
              name: "root-client-certs",
              namespace: "kamaji-system",
            },
          },
          privateKey: {
            secretReference: {
              keyPath: "tls.key",
              name: "root-client-certs",
              namespace: "kamaji-system",
            },
          },
        },
      },
    },
    status: {
      usedBy: ["default/test", "default/test2", "default/test3"],
    },
  } as unknown as IoClastixKamajiV1alpha1DataStore;
}
