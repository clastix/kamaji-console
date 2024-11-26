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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector';
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector';

/**
* Required. A pod affinity term, associated with the corresponding weight.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm {
    'labelSelector'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector;
    /**
    * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod\'s pod (anti) affinity. Keys that don\'t exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn\'t set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
    */
    'matchLabelKeys'?: Array<string>;
    /**
    * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod\'s pod (anti) affinity. Keys that don\'t exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn\'t set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
    */
    'mismatchLabelKeys'?: Array<string>;
    'namespaceSelector'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector;
    /**
    * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means \"this pod\'s namespace\".
    */
    'namespaces'?: Array<string>;
    /**
    * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
    */
    'topologyKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labelSelector",
            "baseName": "labelSelector",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermLabelSelector"
        },
        {
            "name": "matchLabelKeys",
            "baseName": "matchLabelKeys",
            "type": "Array<string>"
        },
        {
            "name": "mismatchLabelKeys",
            "baseName": "mismatchLabelKeys",
            "type": "Array<string>"
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTermNamespaceSelector"
        },
        {
            "name": "namespaces",
            "baseName": "namespaces",
            "type": "Array<string>"
        },
        {
            "name": "topologyKey",
            "baseName": "topologyKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionInnerPodAffinityTerm.attributeTypeMap;
    }
}

