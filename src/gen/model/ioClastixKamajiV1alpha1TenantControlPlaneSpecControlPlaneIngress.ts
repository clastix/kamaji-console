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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata';

/**
* Defining the options for an Optional Ingress which will expose API Server of the Tenant Control Plane
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress {
    'additionalMetadata'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata;
    /**
    * Hostname is an optional field which will be used as Ingress\'s Host. If it is not defined, Ingress\'s host will be \"<tenant>.<namespace>.<domain>\", where domain is specified under NetworkProfileSpec
    */
    'hostname'?: string;
    'ingressClassName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalMetadata",
            "baseName": "additionalMetadata",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata"
        },
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "ingressClassName",
            "baseName": "ingressClassName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneIngress.attributeTypeMap;
    }
}

