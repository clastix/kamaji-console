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
* KubernetesVersion contains the information regarding the running Kubernetes version, and its upgrade status.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion {
    /**
    * Status returns the current status of the Kubernetes version, such as its provisioning state, or completed upgrade.
    */
    'status'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion.StatusEnum;
    /**
    * Version is the running Kubernetes version of the Tenant Control Plane.
    */
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion.StatusEnum"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion.attributeTypeMap;
    }
}

export namespace IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion {
    export enum StatusEnum {
        Provisioning = <any> 'Provisioning',
        CertificateAuthorityRotating = <any> 'CertificateAuthorityRotating',
        Upgrading = <any> 'Upgrading',
        Migrating = <any> 'Migrating',
        Ready = <any> 'Ready',
        NotReady = <any> 'NotReady'
    }
}
