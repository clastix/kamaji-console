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
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig';

/**
* KubeConfig contains information about the kubenconfigs that control plane pieces need
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig {
    'admin'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig;
    'controllerManager'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig;
    'scheduler'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "admin",
            "baseName": "admin",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig"
        },
        {
            "name": "controllerManager",
            "baseName": "controllerManager",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig"
        },
        {
            "name": "scheduler",
            "baseName": "scheduler",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddonsKonnectivityKubeconfig"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig.attributeTypeMap;
    }
}

