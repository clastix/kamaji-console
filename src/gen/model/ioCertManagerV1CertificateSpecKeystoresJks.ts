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
import { IoCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef } from './ioCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef';

/**
* JKS configures options for storing a JKS keystore in the `spec.secretName` Secret resource.
*/
export class IoCertManagerV1CertificateSpecKeystoresJks {
    /**
    * Create enables JKS keystore creation for the Certificate. If true, a file named `keystore.jks` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will only be updated upon re-issuance. A file named `truststore.jks` will also be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef` containing the issuing Certificate Authority
    */
    'create': boolean;
    'passwordSecretRef': IoCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "create",
            "baseName": "create",
            "type": "boolean"
        },
        {
            "name": "passwordSecretRef",
            "baseName": "passwordSecretRef",
            "type": "IoCertManagerV1CertificateSpecKeystoresJksPasswordSecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateSpecKeystoresJks.attributeTypeMap;
    }
}

