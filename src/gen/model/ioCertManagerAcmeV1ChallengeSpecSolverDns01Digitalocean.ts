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
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef';

/**
* Use the DigitalOcean DNS API to manage DNS01 challenge records.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean {
    'tokenSecretRef': IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tokenSecretRef",
            "baseName": "tokenSecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean.attributeTypeMap;
    }
}

