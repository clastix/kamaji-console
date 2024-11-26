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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentStrategyRollingUpdate } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentStrategyRollingUpdate';

/**
* Strategy describes how to replace existing pods with new ones for the given Tenant Control Plane. Default value is set to Rolling Update, with a blue/green strategy.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentStrategy {
    'rollingUpdate'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentStrategyRollingUpdate;
    /**
    * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentStrategyRollingUpdate"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentStrategy.attributeTypeMap;
    }
}

