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
* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven\'t been accounted in Job status counters.
*/
export class IoK8sApiBatchV1UncountedTerminatedPods {
    /**
    * failed holds UIDs of failed Pods.
    */
    'failed'?: Array<string>;
    /**
    * succeeded holds UIDs of succeeded Pods.
    */
    'succeeded'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "failed",
            "baseName": "failed",
            "type": "Array<string>"
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiBatchV1UncountedTerminatedPods.attributeTypeMap;
    }
}

