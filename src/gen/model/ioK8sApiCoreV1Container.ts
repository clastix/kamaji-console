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
import { IoK8sApiCoreV1ContainerPort } from './ioK8sApiCoreV1ContainerPort';
import { IoK8sApiCoreV1ContainerResizePolicy } from './ioK8sApiCoreV1ContainerResizePolicy';
import { IoK8sApiCoreV1EnvFromSource } from './ioK8sApiCoreV1EnvFromSource';
import { IoK8sApiCoreV1EnvVar } from './ioK8sApiCoreV1EnvVar';
import { IoK8sApiCoreV1Lifecycle } from './ioK8sApiCoreV1Lifecycle';
import { IoK8sApiCoreV1Probe } from './ioK8sApiCoreV1Probe';
import { IoK8sApiCoreV1ResourceRequirements } from './ioK8sApiCoreV1ResourceRequirements';
import { IoK8sApiCoreV1SecurityContext } from './ioK8sApiCoreV1SecurityContext';
import { IoK8sApiCoreV1VolumeDevice } from './ioK8sApiCoreV1VolumeDevice';
import { IoK8sApiCoreV1VolumeMount } from './ioK8sApiCoreV1VolumeMount';

/**
* A single application container that you want to run within a pod.
*/
export class IoK8sApiCoreV1Container {
    /**
    * Arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
    */
    'args'?: Array<string>;
    /**
    * Entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
    */
    'command'?: Array<string>;
    /**
    * List of environment variables to set in the container. Cannot be updated.
    */
    'env'?: Array<IoK8sApiCoreV1EnvVar>;
    /**
    * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
    */
    'envFrom'?: Array<IoK8sApiCoreV1EnvFromSource>;
    /**
    * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
    */
    'image'?: string;
    /**
    * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images  Possible enum values:  - `\"Always\"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.  - `\"IfNotPresent\"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.  - `\"Never\"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present
    */
    'imagePullPolicy'?: IoK8sApiCoreV1Container.ImagePullPolicyEnum;
    'lifecycle'?: IoK8sApiCoreV1Lifecycle;
    'livenessProbe'?: IoK8sApiCoreV1Probe;
    /**
    * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
    */
    'name': string;
    /**
    * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
    */
    'ports'?: Array<IoK8sApiCoreV1ContainerPort>;
    'readinessProbe'?: IoK8sApiCoreV1Probe;
    /**
    * Resources resize policy for the container.
    */
    'resizePolicy'?: Array<IoK8sApiCoreV1ContainerResizePolicy>;
    'resources'?: IoK8sApiCoreV1ResourceRequirements;
    /**
    * RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is \"Always\". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod\'s restart policy and the container type. Setting the RestartPolicy as \"Always\" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy \"Always\" will be shut down. This lifecycle differs from normal init containers and is often referred to as a \"sidecar\" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
    */
    'restartPolicy'?: string;
    'securityContext'?: IoK8sApiCoreV1SecurityContext;
    'startupProbe'?: IoK8sApiCoreV1Probe;
    /**
    * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
    */
    'stdin'?: boolean;
    /**
    * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
    */
    'stdinOnce'?: boolean;
    /**
    * Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
    */
    'terminationMessagePath'?: string;
    /**
    * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.  Possible enum values:  - `\"FallbackToLogsOnError\"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.  - `\"File\"` is the default behavior and will set the container status message to the contents of the container\'s terminationMessagePath when the container exits.
    */
    'terminationMessagePolicy'?: IoK8sApiCoreV1Container.TerminationMessagePolicyEnum;
    /**
    * Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false.
    */
    'tty'?: boolean;
    /**
    * volumeDevices is the list of block devices to be used by the container.
    */
    'volumeDevices'?: Array<IoK8sApiCoreV1VolumeDevice>;
    /**
    * Pod volumes to mount into the container\'s filesystem. Cannot be updated.
    */
    'volumeMounts'?: Array<IoK8sApiCoreV1VolumeMount>;
    /**
    * Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated.
    */
    'workingDir'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>"
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>"
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "Array<IoK8sApiCoreV1EnvVar>"
        },
        {
            "name": "envFrom",
            "baseName": "envFrom",
            "type": "Array<IoK8sApiCoreV1EnvFromSource>"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "IoK8sApiCoreV1Container.ImagePullPolicyEnum"
        },
        {
            "name": "lifecycle",
            "baseName": "lifecycle",
            "type": "IoK8sApiCoreV1Lifecycle"
        },
        {
            "name": "livenessProbe",
            "baseName": "livenessProbe",
            "type": "IoK8sApiCoreV1Probe"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<IoK8sApiCoreV1ContainerPort>"
        },
        {
            "name": "readinessProbe",
            "baseName": "readinessProbe",
            "type": "IoK8sApiCoreV1Probe"
        },
        {
            "name": "resizePolicy",
            "baseName": "resizePolicy",
            "type": "Array<IoK8sApiCoreV1ContainerResizePolicy>"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "IoK8sApiCoreV1ResourceRequirements"
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "string"
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "IoK8sApiCoreV1SecurityContext"
        },
        {
            "name": "startupProbe",
            "baseName": "startupProbe",
            "type": "IoK8sApiCoreV1Probe"
        },
        {
            "name": "stdin",
            "baseName": "stdin",
            "type": "boolean"
        },
        {
            "name": "stdinOnce",
            "baseName": "stdinOnce",
            "type": "boolean"
        },
        {
            "name": "terminationMessagePath",
            "baseName": "terminationMessagePath",
            "type": "string"
        },
        {
            "name": "terminationMessagePolicy",
            "baseName": "terminationMessagePolicy",
            "type": "IoK8sApiCoreV1Container.TerminationMessagePolicyEnum"
        },
        {
            "name": "tty",
            "baseName": "tty",
            "type": "boolean"
        },
        {
            "name": "volumeDevices",
            "baseName": "volumeDevices",
            "type": "Array<IoK8sApiCoreV1VolumeDevice>"
        },
        {
            "name": "volumeMounts",
            "baseName": "volumeMounts",
            "type": "Array<IoK8sApiCoreV1VolumeMount>"
        },
        {
            "name": "workingDir",
            "baseName": "workingDir",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Container.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1Container {
    export enum ImagePullPolicyEnum {
        Always = <any> 'Always',
        IfNotPresent = <any> 'IfNotPresent',
        Never = <any> 'Never'
    }
    export enum TerminationMessagePolicyEnum {
        FallbackToLogsOnError = <any> 'FallbackToLogsOnError',
        File = <any> 'File'
    }
}
