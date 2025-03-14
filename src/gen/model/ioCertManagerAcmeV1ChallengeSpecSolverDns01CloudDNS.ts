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
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef';

/**
* Use the Google Cloud DNS API to manage DNS01 challenge records.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS {
    /**
    * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
    */
    'hostedZoneName'?: string;
    'project': string;
    'serviceAccountSecretRef'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostedZoneName",
            "baseName": "hostedZoneName",
            "type": "string"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        },
        {
            "name": "serviceAccountSecretRef",
            "baseName": "serviceAccountSecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNSAccountSecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS.attributeTypeMap;
    }
}

