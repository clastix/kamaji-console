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
* ServiceAccountSubject holds detailed information for service-account-kind subject.
*/
export class IoK8sApiFlowcontrolV1beta3ServiceAccountSubject {
    /**
    * `name` is the name of matching ServiceAccount objects, or \"*\" to match regardless of name. Required.
    */
    'name': string;
    /**
    * `namespace` is the namespace of matching ServiceAccount objects. Required.
    */
    'namespace': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta3ServiceAccountSubject.attributeTypeMap;
    }
}

