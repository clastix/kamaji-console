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
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner';

/**
* Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity {
    /**
    * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
    */
    'preferredDuringSchedulingIgnoredDuringExecution'?: Array<IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner>;
    /**
    * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
    */
    'requiredDuringSchedulingIgnoredDuringExecution'?: Array<IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferredDuringSchedulingIgnoredDuringExecution",
            "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInner>"
        },
        {
            "name": "requiredDuringSchedulingIgnoredDuringExecution",
            "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
            "type": "Array<IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionInner>"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpecAffinityPodAffinity.attributeTypeMap;
    }
}

