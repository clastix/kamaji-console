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
import { IoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from './ioK8sApiAppsV1RollingUpdateStatefulSetStrategy';

/**
* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
*/
export class IoK8sApiAppsV1StatefulSetUpdateStrategy {
    'rollingUpdate'?: IoK8sApiAppsV1RollingUpdateStatefulSetStrategy;
    /**
    * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.  Possible enum values:  - `\"OnDelete\"` triggers the legacy behavior. Version tracking and ordered rolling restarts are disabled. Pods are recreated from the StatefulSetSpec when they are manually deleted. When a scale operation is performed with this strategy,specification version indicated by the StatefulSet\'s currentRevision.  - `\"RollingUpdate\"` indicates that update will be applied to all Pods in the StatefulSet with respect to the StatefulSet ordering constraints. When a scale operation is performed with this strategy, new Pods will be created from the specification version indicated by the StatefulSet\'s updateRevision.
    */
    'type'?: IoK8sApiAppsV1StatefulSetUpdateStrategy.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "IoK8sApiAppsV1RollingUpdateStatefulSetStrategy"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IoK8sApiAppsV1StatefulSetUpdateStrategy.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1StatefulSetUpdateStrategy.attributeTypeMap;
    }
}

export namespace IoK8sApiAppsV1StatefulSetUpdateStrategy {
    export enum TypeEnum {
        OnDelete = <any> 'OnDelete',
        RollingUpdate = <any> 'RollingUpdate'
    }
}
