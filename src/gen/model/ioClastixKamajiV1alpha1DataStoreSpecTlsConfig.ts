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
import { IoClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority } from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority';
import { IoClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate } from './ioClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate';

/**
* Defines the TLS/SSL configuration required to connect to the data store in a secure way.
*/
export class IoClastixKamajiV1alpha1DataStoreSpecTlsConfig {
    'certificateAuthority': IoClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority;
    'clientCertificate': IoClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certificateAuthority",
            "baseName": "certificateAuthority",
            "type": "IoClastixKamajiV1alpha1DataStoreSpecTlsConfigCertificateAuthority"
        },
        {
            "name": "clientCertificate",
            "baseName": "clientCertificate",
            "type": "IoClastixKamajiV1alpha1DataStoreSpecTlsConfigClientCertificate"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1DataStoreSpecTlsConfig.attributeTypeMap;
    }
}

