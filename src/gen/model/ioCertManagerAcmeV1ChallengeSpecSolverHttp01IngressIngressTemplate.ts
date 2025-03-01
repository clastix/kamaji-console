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
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata';

/**
* Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate {
    'metadata'?: IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplateMetadata"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressIngressTemplate.attributeTypeMap;
    }
}

