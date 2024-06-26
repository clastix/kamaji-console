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
import { IoK8sApiCoreV1SELinuxOptions } from './ioK8sApiCoreV1SELinuxOptions';

/**
* SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
*/
export class IoK8sApiPolicyV1beta1SELinuxStrategyOptions {
    /**
    * rule is the strategy that will dictate the allowable labels that may be set.
    */
    'rule': string;
    'seLinuxOptions'?: IoK8sApiCoreV1SELinuxOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoK8sApiCoreV1SELinuxOptions"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1SELinuxStrategyOptions.attributeTypeMap;
    }
}

