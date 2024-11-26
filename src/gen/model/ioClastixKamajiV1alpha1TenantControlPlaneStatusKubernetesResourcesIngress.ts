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
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer';

/**
* KubernetesIngressStatus defines the status for the Tenant Control Plane Ingress in the management cluster.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress {
    'loadBalancer'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer;
    /**
    * The name of the Ingress for the given cluster.
    */
    'name': string;
    /**
    * The namespace which the Ingress for the given cluster is deployed.
    */
    'namespace': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngressLoadBalancer"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResourcesIngress.attributeTypeMap;
    }
}

