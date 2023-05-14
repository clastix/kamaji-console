export const mockPod = (name: string, status: string) => {
  return {
    metadata: {
      creationTimestamp: "2023-01-12T15:11:56.000Z",
      generateName: "test-5d6d76c9d4-",
      labels: {},
      managedFields: [],
      name: name,
      namespace: "default",
      ownerReferences: [],
      resourceVersion: "151783",
      uid: "048fec9c-2b21-45fc-8cc6-1b80f9642ebf",
    },
    spec: {
      containers: [
        {
          args: [
            "--advertise-address=10.96.45.153",
            "--allow-privileged=true",
            "--authorization-mode=Node,RBAC",
            "--client-ca-file=/etc/kubernetes/pki/ca.crt",
            "--enable-admission-plugins=ResourceQuota,LimitRanger",
            "--enable-bootstrap-token-auth=true",
            "--etcd-cafile=/etc/kubernetes/pki/etcd/ca.crt",
            "--etcd-certfile=/etc/kubernetes/pki/etcd/server.crt",
            "--etcd-compaction-interval=0",
            "--etcd-keyfile=/etc/kubernetes/pki/etcd/server.key",
            "--etcd-prefix=/default_test",
            "--etcd-servers=https://etcd-0.etcd.kamaji-system.svc.cluster.local:2379,https://etcd-1.etcd.kamaji-system.svc.cluster.local:2379,https://etcd-2.etcd.kamaji-system.svc.cluster.local:2379",
            "--kubelet-client-certificate=/etc/kubernetes/pki/apiserver-kubelet-client.crt",
            "--kubelet-client-key=/etc/kubernetes/pki/apiserver-kubelet-client.key",
            "--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP",
            "--proxy-client-cert-file=/etc/kubernetes/pki/front-proxy-client.crt",
            "--proxy-client-key-file=/etc/kubernetes/pki/front-proxy-client.key",
            "--requestheader-allowed-names=front-proxy-client",
            "--requestheader-client-ca-file=/etc/kubernetes/pki/front-proxy-ca.crt",
            "--requestheader-extra-headers-prefix=X-Remote-Extra-",
            "--requestheader-group-headers=X-Remote-Group",
            "--requestheader-username-headers=X-Remote-User",
            "--secure-port=6443",
            "--service-account-issuer=https://kubernetes.default.svc.cluster.local",
            "--service-account-key-file=/etc/kubernetes/pki/sa.pub",
            "--service-account-signing-key-file=/etc/kubernetes/pki/sa.key",
            "--service-cluster-ip-range=10.96.0.0/16",
            "--tls-cert-file=/etc/kubernetes/pki/apiserver.crt",
            "--tls-private-key-file=/etc/kubernetes/pki/apiserver.key",
          ],
          command: ["kube-apiserver"],
          image: "k8s.gcr.io/kube-apiserver:v1.25.4",
          imagePullPolicy: "Always",
          livenessProbe: {
            failureThreshold: 3,
            httpGet: { path: "/livez", port: 6443, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          name: "kube-apiserver",
          readinessProbe: {
            failureThreshold: 3,
            httpGet: { path: "/readyz", port: 6443, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          resources: {},
          startupProbe: {
            failureThreshold: 3,
            httpGet: { path: "/livez", port: 6443, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          volumeMounts: [
            {
              mountPath: "/etc/kubernetes/pki",
              name: "etc-kubernetes-pki",
              readOnly: true,
            },
            {
              mountPath: "/etc/ca-certificates",
              name: "etc-ca-certificates",
              readOnly: true,
            },
            {
              mountPath: "/etc/ssl/certs",
              name: "etc-ssl-certs",
              readOnly: true,
            },
            {
              mountPath: "/usr/share/ca-certificates",
              name: "usr-share-ca-certificates",
              readOnly: true,
            },
            {
              mountPath: "/usr/local/share/ca-certificates",
              name: "usr-local-share-ca-certificates",
              readOnly: true,
            },
            {
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount",
              name: "kube-api-access-mrqcx",
              readOnly: true,
            },
          ],
        },
        {
          args: [
            "--authentication-kubeconfig=/etc/kubernetes/scheduler.conf",
            "--authorization-kubeconfig=/etc/kubernetes/scheduler.conf",
            "--bind-address=0.0.0.0",
            "--kubeconfig=/etc/kubernetes/scheduler.conf",
            "--leader-elect=true",
          ],
          command: ["kube-scheduler"],
          image: "k8s.gcr.io/kube-scheduler:v1.25.4",
          imagePullPolicy: "Always",
          livenessProbe: {
            failureThreshold: 3,
            httpGet: { path: "/healthz", port: 10259, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          name: "kube-scheduler",
          resources: {},
          startupProbe: {
            failureThreshold: 3,
            httpGet: { path: "/healthz", port: 10259, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          volumeMounts: [
            {
              mountPath: "/etc/kubernetes",
              name: "scheduler-kubeconfig",
              readOnly: true,
            },
            {
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount",
              name: "kube-api-access-mrqcx",
              readOnly: true,
            },
          ],
        },
        {
          args: [
            "--allocate-node-cidrs=true",
            "--authentication-kubeconfig=/etc/kubernetes/controller-manager.conf",
            "--authorization-kubeconfig=/etc/kubernetes/controller-manager.conf",
            "--bind-address=0.0.0.0",
            "--client-ca-file=/etc/kubernetes/pki/ca.crt",
            "--cluster-cidr=10.244.0.0/16",
            "--cluster-name=test",
            "--cluster-signing-cert-file=/etc/kubernetes/pki/ca.crt",
            "--cluster-signing-key-file=/etc/kubernetes/pki/ca.key",
            "--controllers=*,bootstrapsigner,tokencleaner",
            "--kubeconfig=/etc/kubernetes/controller-manager.conf",
            "--leader-elect=true",
            "--requestheader-client-ca-file=/etc/kubernetes/pki/front-proxy-ca.crt",
            "--root-ca-file=/etc/kubernetes/pki/ca.crt",
            "--service-account-private-key-file=/etc/kubernetes/pki/sa.key",
            "--service-cluster-ip-range=10.96.0.0/16",
            "--use-service-account-credentials=true",
          ],
          command: ["kube-controller-manager"],
          image: "k8s.gcr.io/kube-controller-manager:v1.25.4",
          imagePullPolicy: "Always",
          livenessProbe: {
            failureThreshold: 3,
            httpGet: { path: "/healthz", port: 10257, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          name: "kube-controller-manager",
          resources: {},
          startupProbe: {
            failureThreshold: 3,
            httpGet: { path: "/healthz", port: 10257, scheme: "HTTPS" },
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 1,
          },
          terminationMessagePath: "/dev/termination-log",
          terminationMessagePolicy: "File",
          volumeMounts: [
            {
              mountPath: "/etc/kubernetes",
              name: "controller-manager-kubeconfig",
              readOnly: true,
            },
            {
              mountPath: "/etc/kubernetes/pki",
              name: "etc-kubernetes-pki",
              readOnly: true,
            },
            {
              mountPath: "/etc/ca-certificates",
              name: "etc-ca-certificates",
              readOnly: true,
            },
            {
              mountPath: "/etc/ssl/certs",
              name: "etc-ssl-certs",
              readOnly: true,
            },
            {
              mountPath: "/usr/share/ca-certificates",
              name: "usr-share-ca-certificates",
              readOnly: true,
            },
            {
              mountPath: "/usr/local/share/ca-certificates",
              name: "usr-local-share-ca-certificates",
              readOnly: true,
            },
            {
              mountPath: "/var/run/secrets/kubernetes.io/serviceaccount",
              name: "kube-api-access-mrqcx",
              readOnly: true,
            },
          ],
        },
      ],
      dnsPolicy: "ClusterFirst",
      enableServiceLinks: true,
      nodeName: "kamaji-control-plane",
      preemptionPolicy: "PreemptLowerPriority",
      priority: 0,
      restartPolicy: "Always",
      schedulerName: "default-scheduler",
      securityContext: {},
      serviceAccount: "default",
      serviceAccountName: "default",
      terminationGracePeriodSeconds: 30,
      tolerations: [
        {
          effect: "NoExecute",
          key: "node.kubernetes.io/not-ready",
          operator: "Exists",
          tolerationSeconds: 300,
        },
        {
          effect: "NoExecute",
          key: "node.kubernetes.io/unreachable",
          operator: "Exists",
          tolerationSeconds: 300,
        },
      ],
      volumes: [
        {
          name: "etc-kubernetes-pki",
          projected: {
            defaultMode: 420,
            sources: [
              {
                secret: {
                  items: [
                    { key: "apiserver.crt", path: "apiserver.crt" },
                    { key: "apiserver.key", path: "apiserver.key" },
                  ],
                  name: "test-api-server-certificate",
                },
              },
              {
                secret: {
                  items: [
                    { key: "ca.crt", path: "ca.crt" },
                    { key: "ca.key", path: "ca.key" },
                  ],
                  name: "test-ca",
                },
              },
              {
                secret: {
                  items: [
                    {
                      key: "apiserver-kubelet-client.crt",
                      path: "apiserver-kubelet-client.crt",
                    },
                    {
                      key: "apiserver-kubelet-client.key",
                      path: "apiserver-kubelet-client.key",
                    },
                  ],
                  name: "test-api-server-kubelet-client-certificate",
                },
              },
              {
                secret: {
                  items: [
                    { key: "front-proxy-ca.crt", path: "front-proxy-ca.crt" },
                    { key: "front-proxy-ca.key", path: "front-proxy-ca.key" },
                  ],
                  name: "test-front-proxy-ca-certificate",
                },
              },
              {
                secret: {
                  items: [
                    {
                      key: "front-proxy-client.crt",
                      path: "front-proxy-client.crt",
                    },
                    {
                      key: "front-proxy-client.key",
                      path: "front-proxy-client.key",
                    },
                  ],
                  name: "test-front-proxy-client-certificate",
                },
              },
              {
                secret: {
                  items: [
                    { key: "sa.pub", path: "sa.pub" },
                    { key: "sa.key", path: "sa.key" },
                  ],
                  name: "test-sa-certificate",
                },
              },
              {
                secret: {
                  items: [
                    { key: "ca.crt", path: "etcd/ca.crt" },
                    { key: "server.crt", path: "etcd/server.crt" },
                    { key: "server.key", path: "etcd/server.key" },
                  ],
                  name: "test-datastore-certificate",
                },
              },
            ],
          },
        },
        {
          name: "etc-ca-certificates",
          secret: { defaultMode: 420, secretName: "test-ca" },
        },
        {
          name: "etc-ssl-certs",
          secret: { defaultMode: 420, secretName: "test-ca" },
        },
        {
          name: "usr-share-ca-certificates",
          secret: { defaultMode: 420, secretName: "test-ca" },
        },
        {
          name: "usr-local-share-ca-certificates",
          secret: { defaultMode: 420, secretName: "test-ca" },
        },
        {
          name: "scheduler-kubeconfig",
          secret: {
            defaultMode: 420,
            secretName: "test-scheduler-kubeconfig",
          },
        },
        {
          name: "controller-manager-kubeconfig",
          secret: {
            defaultMode: 420,
            secretName: "test-controller-manager-kubeconfig",
          },
        },
        {
          name: "kine-config",
          secret: {
            defaultMode: 420,
            secretName: "test-datastore-certificate",
          },
        },
        {
          name: "kube-api-access-mrqcx",
          projected: {
            defaultMode: 420,
            sources: [
              {
                serviceAccountToken: {
                  expirationSeconds: 3607,
                  path: "token",
                },
              },
              {
                configMap: {
                  items: [{ key: "ca.crt", path: "ca.crt" }],
                  name: "kube-root-ca.crt",
                },
              },
              {
                downwardAPI: {
                  items: [
                    {
                      fieldRef: {
                        apiVersion: "v1",
                        fieldPath: "metadata.namespace",
                      },
                      path: "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    status: {
      conditions: [
        {
          lastProbeTime: null,
          lastTransitionTime: "2023-01-12T15:11:56.000Z",
          status: "True",
          type: "Initialized",
        },
        {
          lastProbeTime: null,
          lastTransitionTime: "2023-01-12T15:12:07.000Z",
          status: "True",
          type: "Ready",
        },
        {
          lastProbeTime: null,
          lastTransitionTime: "2023-01-12T15:12:07.000Z",
          status: "True",
          type: "ContainersReady",
        },
        {
          lastProbeTime: null,
          lastTransitionTime: "2023-01-12T15:11:56.000Z",
          status: "True",
          type: "PodScheduled",
        },
      ],
      containerStatuses: [
        {
          containerID:
            "containerd://3fab868448f4a90e24ba2b37e83ffc151df49dab232c79d64d6cb22fa0e11660",
          image: "k8s.gcr.io/kube-apiserver:v1.25.4",
          imageID:
            "k8s.gcr.io/kube-apiserver@sha256:ba9fc1737c5b7857f3e19183d1504ec58df0c50d970e0c008e58e8a13dc11422",
          lastState: {},
          name: "kube-apiserver",
          ready: true,
          restartCount: 0,
          started: true,
          state: { running: { startedAt: "2023-01-12T15:11:58.000Z" } },
        },
        {
          containerID:
            "containerd://0b11accec96bf2a9d42bdb62371171c924486a578056f379aa85554296328613",
          image: "k8s.gcr.io/kube-controller-manager:v1.25.4",
          imageID:
            "k8s.gcr.io/kube-controller-manager@sha256:2526315b1c01899eab8b0fb81046083e4571d94433b293f9db124d091df98707",
          lastState: {},
          name: "kube-controller-manager",
          ready: true,
          restartCount: 0,
          started: true,
          state: { running: { startedAt: "2023-01-12T15:11:59.000Z" } },
        },
        {
          containerID:
            "containerd://a4cfb6e9f98b33100c21145ed37f51749714002acda3ff2fe0e222dca005437c",
          image: "k8s.gcr.io/kube-scheduler:v1.25.4",
          imageID:
            "k8s.gcr.io/kube-scheduler@sha256:840d5b9fc29f4cddef60d832f410e3979dde2b8224cdb76dce0784394c0366a0",
          lastState: {},
          name: "kube-scheduler",
          ready: true,
          restartCount: 0,
          started: true,
          state: { running: { startedAt: "2023-01-12T15:11:58.000Z" } },
        },
      ],
      hostIP: "172.18.0.2",
      phase: status,
      podIP: "10.244.0.41",
      podIPs: [{ ip: "10.244.0.41" }],
      qosClass: "BestEffort",
      startTime: "2023-01-12T15:11:56.000Z",
    },
  };
};
