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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextAppArmorProfile } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextAppArmorProfile';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextCapabilities } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextCapabilities';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeLinuxOptions } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeLinuxOptions';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeccompProfile } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeccompProfile';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextWindowsOptions } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextWindowsOptions';

/**
* SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContext {
    /**
    * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
    */
    'allowPrivilegeEscalation'?: boolean;
    'appArmorProfile'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextAppArmorProfile;
    'capabilities'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextCapabilities;
    /**
    * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
    */
    'privileged'?: boolean;
    /**
    * procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
    */
    'procMount'?: string;
    /**
    * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
    */
    'readOnlyRootFilesystem'?: boolean;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeLinuxOptions;
    'seccompProfile'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeccompProfile;
    'windowsOptions'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextWindowsOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPrivilegeEscalation",
            "baseName": "allowPrivilegeEscalation",
            "type": "boolean"
        },
        {
            "name": "appArmorProfile",
            "baseName": "appArmorProfile",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextAppArmorProfile"
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextCapabilities"
        },
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean"
        },
        {
            "name": "procMount",
            "baseName": "procMount",
            "type": "string"
        },
        {
            "name": "readOnlyRootFilesystem",
            "baseName": "readOnlyRootFilesystem",
            "type": "boolean"
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean"
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeLinuxOptions"
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextSeccompProfile"
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextWindowsOptions"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContext.attributeTypeMap;
    }
}
