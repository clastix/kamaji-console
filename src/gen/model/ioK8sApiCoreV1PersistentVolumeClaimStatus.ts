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
import { IoK8sApiCoreV1ModifyVolumeStatus } from './ioK8sApiCoreV1ModifyVolumeStatus';
import { IoK8sApiCoreV1PersistentVolumeClaimCondition } from './ioK8sApiCoreV1PersistentVolumeClaimCondition';

/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
*/
export class IoK8sApiCoreV1PersistentVolumeClaimStatus {
    /**
    * accessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<IoK8sApiCoreV1PersistentVolumeClaimStatus.AccessModesEnum>;
    /**
    * allocatedResourceStatuses stores status of resource being resized for the given PVC. Key names follow standard Kubernetes label syntax. Valid values are either:  * Un-prefixed keys:   - storage - the capacity of the volume.  * Custom resources must use implementation-defined prefixed names such as \"example.com/my-custom-resource\" Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.  ClaimResourceStatus can be in any of following states:  - ControllerResizeInProgress:   State set when resize controller starts resizing the volume in control-plane.  - ControllerResizeFailed:   State set when resize has failed in resize controller with a terminal error.  - NodeResizePending:   State set when resize controller has finished resizing the volume but further resizing of   volume is needed on the node.  - NodeResizeInProgress:   State set when kubelet starts resizing the volume.  - NodeResizeFailed:   State set when resizing has failed in kubelet with a terminal error. Transient errors don\'t set   NodeResizeFailed. For example: if expanding a PVC for more capacity - this field can be one of the following states:  - pvc.status.allocatedResourceStatus[\'storage\'] = \"ControllerResizeInProgress\"      - pvc.status.allocatedResourceStatus[\'storage\'] = \"ControllerResizeFailed\"      - pvc.status.allocatedResourceStatus[\'storage\'] = \"NodeResizePending\"      - pvc.status.allocatedResourceStatus[\'storage\'] = \"NodeResizeInProgress\"      - pvc.status.allocatedResourceStatus[\'storage\'] = \"NodeResizeFailed\" When this field is not set, it means that no resize operation is in progress for the given PVC.  A controller that receives PVC update with previously unknown resourceName or ClaimResourceStatus should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.  This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
    */
    'allocatedResourceStatuses'?: { [key: string]: string; };
    /**
    * allocatedResources tracks the resources allocated to a PVC including its capacity. Key names follow standard Kubernetes label syntax. Valid values are either:  * Un-prefixed keys:   - storage - the capacity of the volume.  * Custom resources must use implementation-defined prefixed names such as \"example.com/my-custom-resource\" Apart from above values - keys that are unprefixed or have kubernetes.io prefix are considered reserved and hence may not be used.  Capacity reported here may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity.  A controller that receives PVC update with previously unknown resourceName should ignore the update for the purpose it was designed. For example - a controller that only is responsible for resizing capacity of the volume, should ignore PVC updates that change other valid resources associated with PVC.  This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.
    */
    'allocatedResources'?: { [key: string]: string; };
    /**
    * capacity represents the actual resources of the underlying volume.
    */
    'capacity'?: { [key: string]: string; };
    /**
    * conditions is the current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to \'Resizing\'.
    */
    'conditions'?: Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>;
    /**
    * currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim This is an alpha field and requires enabling VolumeAttributesClass feature.
    */
    'currentVolumeAttributesClassName'?: string;
    'modifyVolumeStatus'?: IoK8sApiCoreV1ModifyVolumeStatus;
    /**
    * phase represents the current phase of PersistentVolumeClaim.  Possible enum values:  - `\"Bound\"` used for PersistentVolumeClaims that are bound  - `\"Lost\"` used for PersistentVolumeClaims that lost their underlying PersistentVolume. The claim was bound to a PersistentVolume and this volume does not exist any longer and all data on it was lost.  - `\"Pending\"` used for PersistentVolumeClaims that are not yet bound
    */
    'phase'?: IoK8sApiCoreV1PersistentVolumeClaimStatus.PhaseEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<IoK8sApiCoreV1PersistentVolumeClaimStatus.AccessModesEnum>"
        },
        {
            "name": "allocatedResourceStatuses",
            "baseName": "allocatedResourceStatuses",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "allocatedResources",
            "baseName": "allocatedResources",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>"
        },
        {
            "name": "currentVolumeAttributesClassName",
            "baseName": "currentVolumeAttributesClassName",
            "type": "string"
        },
        {
            "name": "modifyVolumeStatus",
            "baseName": "modifyVolumeStatus",
            "type": "IoK8sApiCoreV1ModifyVolumeStatus"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "IoK8sApiCoreV1PersistentVolumeClaimStatus.PhaseEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PersistentVolumeClaimStatus.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1PersistentVolumeClaimStatus {
    export enum AccessModesEnum {
        ReadOnlyMany = <any> 'ReadOnlyMany',
        ReadWriteMany = <any> 'ReadWriteMany',
        ReadWriteOnce = <any> 'ReadWriteOnce',
        ReadWriteOncePod = <any> 'ReadWriteOncePod'
    }
    export enum AllocatedResourceStatusesEnum {
        ControllerResizeFailed = <any> 'ControllerResizeFailed',
        ControllerResizeInProgress = <any> 'ControllerResizeInProgress',
        NodeResizeFailed = <any> 'NodeResizeFailed',
        NodeResizeInProgress = <any> 'NodeResizeInProgress',
        NodeResizePending = <any> 'NodeResizePending'
    }
    export enum PhaseEnum {
        Bound = <any> 'Bound',
        Lost = <any> 'Lost',
        Pending = <any> 'Pending'
    }
}
