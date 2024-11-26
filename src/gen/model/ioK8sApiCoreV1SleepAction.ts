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
* SleepAction describes a \"sleep\" action.
*/
export class IoK8sApiCoreV1SleepAction {
    /**
    * Seconds is the number of seconds to sleep.
    */
    'seconds': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1SleepAction.attributeTypeMap;
    }
}

