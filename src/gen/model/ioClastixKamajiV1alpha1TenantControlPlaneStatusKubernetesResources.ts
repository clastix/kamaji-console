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
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion';

/**
* Kubernetes contains information about the reconciliation of the required Kubernetes resources deployed in the admin cluster
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources {
    'deployment'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment;
    'ingress'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress;
    'service'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService;
    'version'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deployment",
            "baseName": "deployment",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesDeployment"
        },
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesVersion"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources.attributeTypeMap;
    }
}

