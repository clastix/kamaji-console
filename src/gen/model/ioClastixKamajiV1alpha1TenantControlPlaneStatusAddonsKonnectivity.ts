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
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService';

/**
* KonnectivityStatus defines the status of Konnectivity as Addon.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity {
    'agent'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent;
    'certificate'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate;
    'clusterrolebinding'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent;
    'configMap'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap;
    'enabled': boolean;
    'kubeconfig'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig;
    'sa'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent;
    'service'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "agent",
            "baseName": "agent",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent"
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityCertificate"
        },
        {
            "name": "clusterrolebinding",
            "baseName": "clusterrolebinding",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent"
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityConfigMap"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "kubeconfig",
            "baseName": "kubeconfig",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig"
        },
        {
            "name": "sa",
            "baseName": "sa",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityAgent"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityService"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivity.attributeTypeMap;
    }
}

