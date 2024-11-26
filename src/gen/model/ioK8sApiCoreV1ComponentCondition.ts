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
* Information about the condition of a component.
*/
export class IoK8sApiCoreV1ComponentCondition {
    /**
    * Condition error code for a component. For example, a health check error code.
    */
    'error'?: string;
    /**
    * Message about the condition for a component. For example, information about a health check.
    */
    'message'?: string;
    /**
    * Status of the condition for a component. Valid values for \"Healthy\": \"True\", \"False\", or \"Unknown\".
    */
    'status': string;
    /**
    * Type of condition for a component. Valid value: \"Healthy\"
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ComponentCondition.attributeTypeMap;
    }
}

