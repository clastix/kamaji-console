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
import { IoK8sApiPolicyV1beta1IDRange } from './ioK8sApiPolicyV1beta1IDRange';

/**
* RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
*/
export class IoK8sApiPolicyV1beta1RunAsUserStrategyOptions {
    /**
    * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
    */
    'ranges'?: Array<IoK8sApiPolicyV1beta1IDRange>;
    /**
    * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
    */
    'rule': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ranges",
            "baseName": "ranges",
            "type": "Array<IoK8sApiPolicyV1beta1IDRange>"
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1RunAsUserStrategyOptions.attributeTypeMap;
    }
}

