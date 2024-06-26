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
* CABundleSecretRef is a reference to a Secret which contains the CABundle which will be used when connecting to Vault when using HTTPS. Mutually exclusive with CABundle. If neither CABundleSecretRef nor CABundle are defined, the cert-manager controller system root certificates are used to validate the TLS connection. If no key for the Secret is specified, cert-manager will default to \'ca.crt\'.
*/
export class IoCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef {
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
        return IoCertManagerV1ClusterIssuerSpecVaultCaBundleSecretRef.attributeTypeMap;
    }
}

