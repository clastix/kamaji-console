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
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition';

/**
* PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
*/
export class IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus {
    /**
    * `conditions` is the current state of \"request-priority\".
    */
    'conditions'?: Array<IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationStatus.attributeTypeMap;
    }
}

