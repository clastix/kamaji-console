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

/**
* PersistentVolumeStatus is the current status of a persistent volume.
*/
export class IoK8sApiCoreV1PersistentVolumeStatus {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'lastPhaseTransitionTime'?: Date;
    /**
    * message is a human-readable message indicating details about why the volume is in this state.
    */
    'message'?: string;
    /**
    * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase  Possible enum values:  - `\"Available\"` used for PersistentVolumes that are not yet bound Available volumes are held by the binder and matched to PersistentVolumeClaims  - `\"Bound\"` used for PersistentVolumes that are bound  - `\"Failed\"` used for PersistentVolumes that failed to be correctly recycled or deleted after being released from a claim  - `\"Pending\"` used for PersistentVolumes that are not available  - `\"Released\"` used for PersistentVolumes where the bound PersistentVolumeClaim was deleted released volumes must be recycled before becoming available again this phase is used by the persistent volume claim binder to signal to another process to reclaim the resource
    */
    'phase'?: IoK8sApiCoreV1PersistentVolumeStatus.PhaseEnum;
    /**
    * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
    */
    'reason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastPhaseTransitionTime",
            "baseName": "lastPhaseTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "IoK8sApiCoreV1PersistentVolumeStatus.PhaseEnum"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PersistentVolumeStatus.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1PersistentVolumeStatus {
    export enum PhaseEnum {
        Available = <any> 'Available',
        Bound = <any> 'Bound',
        Failed = <any> 'Failed',
        Pending = <any> 'Pending',
        Released = <any> 'Released'
    }
}
