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

/**
* The required Secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. Use of \'ambient credentials\' is not supported.
*/
export class IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef {
    /**
    * The key of the entry in the Secret resource\'s `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
    */
    'key'?: string;
    /**
    * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1ClusterIssuerSpecVaultAuthKubernetesSecretRef.attributeTypeMap;
    }
}

