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
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference';

/**
* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it\'s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner {
    'preference': IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference;
    /**
    * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
    */
    'weight': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preference",
            "baseName": "preference",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPreference"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner.attributeTypeMap;
    }
}

