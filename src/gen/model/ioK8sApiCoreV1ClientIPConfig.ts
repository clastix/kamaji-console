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
* ClientIPConfig represents the configurations of Client IP based session affinity.
*/
export class IoK8sApiCoreV1ClientIPConfig {
    /**
    * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == \"ClientIP\". Default value is 10800(for 3 hours).
    */
    'timeoutSeconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ClientIPConfig.attributeTypeMap;
    }
}

