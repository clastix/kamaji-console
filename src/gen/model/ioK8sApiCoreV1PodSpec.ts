/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.30.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoK8sApiCoreV1Affinity } from './ioK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1Container } from './ioK8sApiCoreV1Container';
import { IoK8sApiCoreV1EphemeralContainer } from './ioK8sApiCoreV1EphemeralContainer';
import { IoK8sApiCoreV1HostAlias } from './ioK8sApiCoreV1HostAlias';
import { IoK8sApiCoreV1LocalObjectReference } from './ioK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1PodDNSConfig } from './ioK8sApiCoreV1PodDNSConfig';
import { IoK8sApiCoreV1PodOS } from './ioK8sApiCoreV1PodOS';
import { IoK8sApiCoreV1PodReadinessGate } from './ioK8sApiCoreV1PodReadinessGate';
import { IoK8sApiCoreV1PodResourceClaim } from './ioK8sApiCoreV1PodResourceClaim';
import { IoK8sApiCoreV1PodSchedulingGate } from './ioK8sApiCoreV1PodSchedulingGate';
import { IoK8sApiCoreV1PodSecurityContext } from './ioK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1Toleration } from './ioK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1TopologySpreadConstraint } from './ioK8sApiCoreV1TopologySpreadConstraint';
import { IoK8sApiCoreV1Volume } from './ioK8sApiCoreV1Volume';

/**
* PodSpec is a description of a pod.
*/
export class IoK8sApiCoreV1PodSpec {
    /**
    * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
    */
    'activeDeadlineSeconds'?: number;
    'affinity'?: IoK8sApiCoreV1Affinity;
    /**
    * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
    */
    'automountServiceAccountToken'?: boolean;
    /**
    * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
    */
    'containers': Array<IoK8sApiCoreV1Container>;
    'dnsConfig'?: IoK8sApiCoreV1PodDNSConfig;
    /**
    * Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are \'ClusterFirstWithHostNet\', \'ClusterFirst\', \'Default\' or \'None\'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to \'ClusterFirstWithHostNet\'.  Possible enum values:  - `\"ClusterFirst\"` indicates that the pod should use cluster DNS first unless hostNetwork is true, if it is available, then fall back on the default (as determined by kubelet) DNS settings.  - `\"ClusterFirstWithHostNet\"` indicates that the pod should use cluster DNS first, if it is available, then fall back on the default (as determined by kubelet) DNS settings.  - `\"Default\"` indicates that the pod should use the default (as determined by kubelet) DNS settings.  - `\"None\"` indicates that the pod should use empty DNS settings. DNS parameters such as nameservers and search paths should be defined via DNSConfig.
    */
    'dnsPolicy'?: IoK8sApiCoreV1PodSpec.DnsPolicyEnum;
    /**
    * EnableServiceLinks indicates whether information about services should be injected into pod\'s environment variables, matching the syntax of Docker links. Optional: Defaults to true.
    */
    'enableServiceLinks'?: boolean;
    /**
    * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod\'s ephemeralcontainers subresource.
    */
    'ephemeralContainers'?: Array<IoK8sApiCoreV1EphemeralContainer>;
    /**
    * HostAliases is an optional list of hosts and IPs that will be injected into the pod\'s hosts file if specified.
    */
    'hostAliases'?: Array<IoK8sApiCoreV1HostAlias>;
    /**
    * Use the host\'s ipc namespace. Optional: Default to false.
    */
    'hostIPC'?: boolean;
    /**
    * Host networking requested for this pod. Use the host\'s network namespace. If this option is set, the ports that will be used must be specified. Default to false.
    */
    'hostNetwork'?: boolean;
    /**
    * Use the host\'s pid namespace. Optional: Default to false.
    */
    'hostPID'?: boolean;
    /**
    * Use the host\'s user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature.
    */
    'hostUsers'?: boolean;
    /**
    * Specifies the hostname of the Pod If not specified, the pod\'s hostname will be set to a system-defined value.
    */
    'hostname'?: string;
    /**
    * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
    */
    'imagePullSecrets'?: Array<IoK8sApiCoreV1LocalObjectReference>;
    /**
    * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
    */
    'initContainers'?: Array<IoK8sApiCoreV1Container>;
    /**
    * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
    */
    'nodeName'?: string;
    /**
    * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node\'s labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
    */
    'nodeSelector'?: { [key: string]: string; };
    'os'?: IoK8sApiCoreV1PodOS;
    /**
    * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
    */
    'overhead'?: { [key: string]: string; };
    /**
    * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.  Possible enum values:  - `\"Never\"` means that pod never preempts other pods with lower priority.  - `\"PreemptLowerPriority\"` means that pod can preempt other pods with lower priority.
    */
    'preemptionPolicy'?: IoK8sApiCoreV1PodSpec.PreemptionPolicyEnum;
    /**
    * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
    */
    'priority'?: number;
    /**
    * If specified, indicates the pod\'s priority. \"system-node-critical\" and \"system-cluster-critical\" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
    */
    'priorityClassName'?: string;
    /**
    * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to \"True\" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
    */
    'readinessGates'?: Array<IoK8sApiCoreV1PodReadinessGate>;
    /**
    * ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable.
    */
    'resourceClaims'?: Array<IoK8sApiCoreV1PodResourceClaim>;
    /**
    * Restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy  Possible enum values:  - `\"Always\"`  - `\"Never\"`  - `\"OnFailure\"`
    */
    'restartPolicy'?: IoK8sApiCoreV1PodSpec.RestartPolicyEnum;
    /**
    * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the \"legacy\" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
    */
    'runtimeClassName'?: string;
    /**
    * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
    */
    'schedulerName'?: string;
    /**
    * SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.  SchedulingGates can only be set at pod creation time, and be removed only afterwards.
    */
    'schedulingGates'?: Array<IoK8sApiCoreV1PodSchedulingGate>;
    'securityContext'?: IoK8sApiCoreV1PodSecurityContext;
    /**
    * DeprecatedServiceAccount is a deprecated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
    */
    'serviceAccount'?: string;
    /**
    * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
    */
    'serviceAccountName'?: string;
    /**
    * If true the pod\'s hostname will be configured as the pod\'s FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
    */
    'setHostnameAsFQDN'?: boolean;
    /**
    * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
    */
    'shareProcessNamespace'?: boolean;
    /**
    * If specified, the fully qualified Pod hostname will be \"<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>\". If not specified, the pod will not have a domainname at all.
    */
    'subdomain'?: string;
    /**
    * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
    */
    'terminationGracePeriodSeconds'?: number;
    /**
    * If specified, the pod\'s tolerations.
    */
    'tolerations'?: Array<IoK8sApiCoreV1Toleration>;
    /**
    * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
    */
    'topologySpreadConstraints'?: Array<IoK8sApiCoreV1TopologySpreadConstraint>;
    /**
    * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
    */
    'volumes'?: Array<IoK8sApiCoreV1Volume>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeDeadlineSeconds",
            "baseName": "activeDeadlineSeconds",
            "type": "number"
        },
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "IoK8sApiCoreV1Affinity"
        },
        {
            "name": "automountServiceAccountToken",
            "baseName": "automountServiceAccountToken",
            "type": "boolean"
        },
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<IoK8sApiCoreV1Container>"
        },
        {
            "name": "dnsConfig",
            "baseName": "dnsConfig",
            "type": "IoK8sApiCoreV1PodDNSConfig"
        },
        {
            "name": "dnsPolicy",
            "baseName": "dnsPolicy",
            "type": "IoK8sApiCoreV1PodSpec.DnsPolicyEnum"
        },
        {
            "name": "enableServiceLinks",
            "baseName": "enableServiceLinks",
            "type": "boolean"
        },
        {
            "name": "ephemeralContainers",
            "baseName": "ephemeralContainers",
            "type": "Array<IoK8sApiCoreV1EphemeralContainer>"
        },
        {
            "name": "hostAliases",
            "baseName": "hostAliases",
            "type": "Array<IoK8sApiCoreV1HostAlias>"
        },
        {
            "name": "hostIPC",
            "baseName": "hostIPC",
            "type": "boolean"
        },
        {
            "name": "hostNetwork",
            "baseName": "hostNetwork",
            "type": "boolean"
        },
        {
            "name": "hostPID",
            "baseName": "hostPID",
            "type": "boolean"
        },
        {
            "name": "hostUsers",
            "baseName": "hostUsers",
            "type": "boolean"
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<IoK8sApiCoreV1LocalObjectReference>"
        },
        {
            "name": "initContainers",
            "baseName": "initContainers",
            "type": "Array<IoK8sApiCoreV1Container>"
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string"
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "os",
            "baseName": "os",
            "type": "IoK8sApiCoreV1PodOS"
        },
        {
            "name": "overhead",
            "baseName": "overhead",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "preemptionPolicy",
            "baseName": "preemptionPolicy",
            "type": "IoK8sApiCoreV1PodSpec.PreemptionPolicyEnum"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "priorityClassName",
            "baseName": "priorityClassName",
            "type": "string"
        },
        {
            "name": "readinessGates",
            "baseName": "readinessGates",
            "type": "Array<IoK8sApiCoreV1PodReadinessGate>"
        },
        {
            "name": "resourceClaims",
            "baseName": "resourceClaims",
            "type": "Array<IoK8sApiCoreV1PodResourceClaim>"
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "IoK8sApiCoreV1PodSpec.RestartPolicyEnum"
        },
        {
            "name": "runtimeClassName",
            "baseName": "runtimeClassName",
            "type": "string"
        },
        {
            "name": "schedulerName",
            "baseName": "schedulerName",
            "type": "string"
        },
        {
            "name": "schedulingGates",
            "baseName": "schedulingGates",
            "type": "Array<IoK8sApiCoreV1PodSchedulingGate>"
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "IoK8sApiCoreV1PodSecurityContext"
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "string"
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string"
        },
        {
            "name": "setHostnameAsFQDN",
            "baseName": "setHostnameAsFQDN",
            "type": "boolean"
        },
        {
            "name": "shareProcessNamespace",
            "baseName": "shareProcessNamespace",
            "type": "boolean"
        },
        {
            "name": "subdomain",
            "baseName": "subdomain",
            "type": "string"
        },
        {
            "name": "terminationGracePeriodSeconds",
            "baseName": "terminationGracePeriodSeconds",
            "type": "number"
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<IoK8sApiCoreV1Toleration>"
        },
        {
            "name": "topologySpreadConstraints",
            "baseName": "topologySpreadConstraints",
            "type": "Array<IoK8sApiCoreV1TopologySpreadConstraint>"
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<IoK8sApiCoreV1Volume>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PodSpec.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1PodSpec {
    export enum DnsPolicyEnum {
        ClusterFirst = <any> 'ClusterFirst',
        ClusterFirstWithHostNet = <any> 'ClusterFirstWithHostNet',
        Default = <any> 'Default',
        None = <any> 'None'
    }
    export enum PreemptionPolicyEnum {
        Never = <any> 'Never',
        PreemptLowerPriority = <any> 'PreemptLowerPriority'
    }
    export enum RestartPolicyEnum {
        Always = <any> 'Always',
        Never = <any> 'Never',
        OnFailure = <any> 'OnFailure'
    }
}
