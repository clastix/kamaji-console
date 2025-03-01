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
import { IoCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef } from './ioCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef';

/**
* Cloud specifies the Venafi cloud configuration settings. Only one of TPP or Cloud may be specified.
*/
export class IoCertManagerV1ClusterIssuerSpecVenafiCloud {
    'apiTokenSecretRef': IoCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef;
    /**
    * URL is the base URL for Venafi Cloud. Defaults to \"https://api.venafi.cloud/v1\".
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiTokenSecretRef",
            "baseName": "apiTokenSecretRef",
            "type": "IoCertManagerV1ClusterIssuerSpecVenafiCloudApiTokenSecretRef"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1ClusterIssuerSpecVenafiCloud.attributeTypeMap;
    }
}

