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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata';

/**
* Defining the options for the Tenant Control Plane Service resource.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService {
    'additionalMetadata'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata;
    /**
    * ServiceType allows specifying how to expose the Tenant Control Plane.
    */
    'serviceType': IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService.ServiceTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalMetadata",
            "baseName": "additionalMetadata",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalMetadata"
        },
        {
            "name": "serviceType",
            "baseName": "serviceType",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService.ServiceTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService.attributeTypeMap;
    }
}

export namespace IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneService {
    export enum ServiceTypeEnum {
        ClusterIp = <any> 'ClusterIP',
        NodePort = <any> 'NodePort',
        LoadBalancer = <any> 'LoadBalancer'
    }
}
