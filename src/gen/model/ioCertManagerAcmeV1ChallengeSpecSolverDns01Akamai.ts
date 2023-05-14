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
* Use the Akamai DNS zone management API to manage DNS01 challenge records.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai {
    'accessTokenSecretRef': IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef;
    'clientSecretSecretRef': IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef;
    'clientTokenSecretRef': IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef;
    'serviceConsumerDomain': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessTokenSecretRef",
            "baseName": "accessTokenSecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef"
        },
        {
            "name": "clientSecretSecretRef",
            "baseName": "clientSecretSecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef"
        },
        {
            "name": "clientTokenSecretRef",
            "baseName": "clientTokenSecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef"
        },
        {
            "name": "serviceConsumerDomain",
            "baseName": "serviceConsumerDomain",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai.attributeTypeMap;
    }
}

