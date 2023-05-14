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
import { IoCertManagerV1CertificateSpecKeystoresJks } from './ioCertManagerV1CertificateSpecKeystoresJks';
import { IoCertManagerV1CertificateSpecKeystoresPkcs12 } from './ioCertManagerV1CertificateSpecKeystoresPkcs12';

/**
* Keystores configures additional keystore output formats stored in the `secretName` Secret resource.
*/
export class IoCertManagerV1CertificateSpecKeystores {
    'jks'?: IoCertManagerV1CertificateSpecKeystoresJks;
    'pkcs12'?: IoCertManagerV1CertificateSpecKeystoresPkcs12;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jks",
            "baseName": "jks",
            "type": "IoCertManagerV1CertificateSpecKeystoresJks"
        },
        {
            "name": "pkcs12",
            "baseName": "pkcs12",
            "type": "IoCertManagerV1CertificateSpecKeystoresPkcs12"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateSpecKeystores.attributeTypeMap;
    }
}

