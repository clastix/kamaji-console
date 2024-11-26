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
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup';

/**
* Storage Status contains information about Kubernetes storage system
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage {
    'certificate'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate;
    'config'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig;
    'dataStoreName'?: string;
    'driver'?: string;
    'setup'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageCertificate"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageConfig"
        },
        {
            "name": "dataStoreName",
            "baseName": "dataStoreName",
            "type": "string"
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string"
        },
        {
            "name": "setup",
            "baseName": "setup",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorageSetup"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage.attributeTypeMap;
    }
}

