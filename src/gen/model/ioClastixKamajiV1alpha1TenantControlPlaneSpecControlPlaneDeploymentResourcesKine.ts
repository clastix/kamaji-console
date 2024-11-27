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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResourcesClaimsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResourcesClaimsInner';

/**
* Define the kine container resources. Available only if Kamaji is running using Kine as backing storage.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesKine {
    /**
    * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers.
    */
    'claims'?: Array<IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResourcesClaimsInner>;
    /**
    * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
    */
    'limits'?: { [key: string]: object; };
    /**
    * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
    */
    'requests'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claims",
            "baseName": "claims",
            "type": "Array<IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKonnectivityServerResourcesClaimsInner>"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentResourcesKine.attributeTypeMap;
    }
}
