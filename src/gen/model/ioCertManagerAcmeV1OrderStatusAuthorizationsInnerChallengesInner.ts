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
* Challenge specifies a challenge offered by the ACME server for an Order. An appropriate Challenge resource can be created to perform the ACME challenge process.
*/
export class IoCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner {
    /**
    * Token is the token that must be presented for this challenge. This is used to compute the \'key\' that must also be presented.
    */
    'token': string;
    /**
    * Type is the type of challenge being offered, e.g. \'http-01\', \'dns-01\', \'tls-sni-01\', etc. This is the raw value retrieved from the ACME server. Only \'http-01\' and \'dns-01\' are supported by cert-manager, other values will be ignored.
    */
    'type': string;
    /**
    * URL is the URL of this challenge. It can be used to retrieve additional metadata about the Challenge from the ACME server.
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1OrderStatusAuthorizationsInnerChallengesInner.attributeTypeMap;
    }
}

