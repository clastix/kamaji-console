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
import { IoK8sApiAppsV1RollingUpdateDaemonSet } from './ioK8sApiAppsV1RollingUpdateDaemonSet';

/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
export class IoK8sApiAppsV1DaemonSetUpdateStrategy {
    'rollingUpdate'?: IoK8sApiAppsV1RollingUpdateDaemonSet;
    /**
    * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.  Possible enum values:  - `\"OnDelete\"` Replace the old daemons only when it\'s killed  - `\"RollingUpdate\"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
    */
    'type'?: IoK8sApiAppsV1DaemonSetUpdateStrategy.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "IoK8sApiAppsV1RollingUpdateDaemonSet"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IoK8sApiAppsV1DaemonSetUpdateStrategy.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1DaemonSetUpdateStrategy.attributeTypeMap;
    }
}

export namespace IoK8sApiAppsV1DaemonSetUpdateStrategy {
    export enum TypeEnum {
        OnDelete = <any> 'OnDelete',
        RollingUpdate = <any> 'RollingUpdate'
    }
}
