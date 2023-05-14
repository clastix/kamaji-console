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
* ObjectFieldSelector selects an APIVersioned field of an object.
*/
export class IoK8sApiCoreV1ObjectFieldSelector {
    /**
    * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
    */
    'apiVersion'?: string;
    /**
    * Path of the field to select in the specified API version.
    */
    'fieldPath': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ObjectFieldSelector.attributeTypeMap;
    }
}

