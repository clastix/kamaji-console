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
import { IoK8sApiCoreV1NodeSelector } from './ioK8sApiCoreV1NodeSelector';

/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
*/
export class IoK8sApiCoreV1VolumeNodeAffinity {
    'required'?: IoK8sApiCoreV1NodeSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "required",
            "baseName": "required",
            "type": "IoK8sApiCoreV1NodeSelector"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VolumeNodeAffinity.attributeTypeMap;
    }
}

