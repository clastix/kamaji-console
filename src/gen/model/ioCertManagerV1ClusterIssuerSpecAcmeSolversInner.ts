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
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01 } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01 } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01';
import { IoCertManagerAcmeV1ChallengeSpecSolverSelector } from './ioCertManagerAcmeV1ChallengeSpecSolverSelector';

/**
* An ACMEChallengeSolver describes how to solve ACME challenges for the issuer it is part of. A selector may be provided to use different solving strategies for different DNS names. Only one of HTTP01 or DNS01 must be provided.
*/
export class IoCertManagerV1ClusterIssuerSpecAcmeSolversInner {
    'dns01'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01;
    'http01'?: IoCertManagerAcmeV1ChallengeSpecSolverHttp01;
    'selector'?: IoCertManagerAcmeV1ChallengeSpecSolverSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dns01",
            "baseName": "dns01",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01"
        },
        {
            "name": "http01",
            "baseName": "http01",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverHttp01"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverSelector"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1ClusterIssuerSpecAcmeSolversInner.attributeTypeMap;
    }
}

