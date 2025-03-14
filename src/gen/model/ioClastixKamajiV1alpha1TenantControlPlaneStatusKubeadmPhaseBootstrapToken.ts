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
* KubeadmPhaseStatus contains the status of a kubeadm phase action.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken {
    'checksum'?: string;
    'lastUpdate'?: Date;

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
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhaseBootstrapToken.attributeTypeMap;
    }
}

