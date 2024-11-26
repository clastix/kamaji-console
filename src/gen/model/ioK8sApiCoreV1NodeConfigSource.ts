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
import { IoK8sApiCoreV1ConfigMapNodeConfigSource } from './ioK8sApiCoreV1ConfigMapNodeConfigSource';

/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
*/
export class IoK8sApiCoreV1NodeConfigSource {
    'configMap'?: IoK8sApiCoreV1ConfigMapNodeConfigSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "IoK8sApiCoreV1ConfigMapNodeConfigSource"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NodeConfigSource.attributeTypeMap;
    }
}

