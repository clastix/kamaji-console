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
* SecretTemplate defines annotations and labels to be copied to the Certificate\'s Secret. Labels and annotations on the Secret will be changed as they appear on the SecretTemplate when added or removed. SecretTemplate annotations are added in conjunction with, and cannot overwrite, the base set of annotations cert-manager sets on the Certificate\'s Secret.
*/
export class IoCertManagerV1CertificateSpecSecretTemplate {
    /**
    * Annotations is a key value map to be copied to the target Kubernetes Secret.
    */
    'annotations'?: { [key: string]: string; };
    /**
    * Labels is a key value map to be copied to the target Kubernetes Secret.
    */
    'labels'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateSpecSecretTemplate.attributeTypeMap;
    }
}

