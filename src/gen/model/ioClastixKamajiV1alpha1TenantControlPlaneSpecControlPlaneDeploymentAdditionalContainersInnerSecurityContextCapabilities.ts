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
* The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextCapabilities {
    /**
    * Added capabilities
    */
    'add'?: Array<string>;
    /**
    * Removed capabilities
    */
    'drop'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "add",
            "baseName": "add",
            "type": "Array<string>"
        },
        {
            "name": "drop",
            "baseName": "drop",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalContainersInnerSecurityContextCapabilities.attributeTypeMap;
    }
}

