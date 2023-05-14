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
* APIServerCertificatesStatus defines the observed state of ETCD Certificate for API server.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer {
    'checksum'?: string;
    'lastUpdate'?: Date;
    'secretName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checksum",
            "baseName": "checksum",
            "type": "string"
        },
        {
            "name": "lastUpdate",
            "baseName": "lastUpdate",
            "type": "Date"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificatesEtcdApiServer.attributeTypeMap;
    }
}

