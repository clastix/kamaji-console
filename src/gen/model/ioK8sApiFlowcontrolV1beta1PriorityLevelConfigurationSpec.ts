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
import { IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration } from './ioK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration';

/**
* PriorityLevelConfigurationSpec specifies the configuration of a priority level.
*/
export class IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec {
    'limited'?: IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration;
    /**
    * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `\"Exempt\"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `\"Limited\"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server\'s limited capacity is made available exclusively to this priority level. Required.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limited",
            "baseName": "limited",
            "type": "IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationSpec.attributeTypeMap;
    }
}

