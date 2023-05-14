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
* NamespaceSpec describes the attributes on a Namespace.
*/
export class IoK8sApiCoreV1NamespaceSpec {
    /**
    * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
    */
    'finalizers'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "finalizers",
            "baseName": "finalizers",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NamespaceSpec.attributeTypeMap;
    }
}

