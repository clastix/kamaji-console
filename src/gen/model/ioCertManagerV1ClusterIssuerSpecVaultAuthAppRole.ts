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
import { IoCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef } from './ioCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef';

/**
* AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
*/
export class IoCertManagerV1ClusterIssuerSpecVaultAuthAppRole {
    /**
    * Path where the App Role authentication backend is mounted in Vault, e.g: \"approle\"
    */
    'path': string;
    /**
    * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
    */
    'roleId': string;
    'secretRef': IoCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoCertManagerV1ClusterIssuerSpecVaultAuthAppRoleSecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1ClusterIssuerSpecVaultAuthAppRole.attributeTypeMap;
    }
}

