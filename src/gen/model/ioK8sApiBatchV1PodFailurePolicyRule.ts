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
import { IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement } from './ioK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement';
import { IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern } from './ioK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern';

/**
* PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.
*/
export class IoK8sApiBatchV1PodFailurePolicyRule {
    /**
    * Specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:  - FailJob: indicates that the pod\'s job is marked as Failed and all   running pods are terminated. - FailIndex: indicates that the pod\'s index is marked as Failed and will   not be restarted.   This value is beta-level. It can be used when the   `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default). - Ignore: indicates that the counter towards the .backoffLimit is not   incremented and a replacement pod is created. - Count: indicates that the pod is handled in the default way - the   counter towards the .backoffLimit is incremented. Additional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.  Possible enum values:  - `\"Count\"` This is an action which might be taken on a pod failure - the pod failure is handled in the default way - the counter towards .backoffLimit, represented by the job\'s .status.failed field, is incremented.  - `\"FailIndex\"` This is an action which might be taken on a pod failure - mark the Job\'s index as failed to avoid restarts within this index. This action can only be used when backoffLimitPerIndex is set. This value is beta-level.  - `\"FailJob\"` This is an action which might be taken on a pod failure - mark the pod\'s job as Failed and terminate all running pods.  - `\"Ignore\"` This is an action which might be taken on a pod failure - the counter towards .backoffLimit, represented by the job\'s .status.failed field, is not incremented and a replacement pod is created.
    */
    'action': IoK8sApiBatchV1PodFailurePolicyRule.ActionEnum;
    'onExitCodes'?: IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement;
    /**
    * Represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed.
    */
    'onPodConditions'?: Array<IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "IoK8sApiBatchV1PodFailurePolicyRule.ActionEnum"
        },
        {
            "name": "onExitCodes",
            "baseName": "onExitCodes",
            "type": "IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement"
        },
        {
            "name": "onPodConditions",
            "baseName": "onPodConditions",
            "type": "Array<IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiBatchV1PodFailurePolicyRule.attributeTypeMap;
    }
}

export namespace IoK8sApiBatchV1PodFailurePolicyRule {
    export enum ActionEnum {
        Count = <any> 'Count',
        FailIndex = <any> 'FailIndex',
        FailJob = <any> 'FailJob',
        Ignore = <any> 'Ignore'
    }
}
