/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.23.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
*/
export class IoK8sApiAppsV1RollingUpdateStatefulSetStrategy {
    /**
    * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
    */
    'partition'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "partition",
            "baseName": "partition",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.attributeTypeMap;
    }
}

