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
import { IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod } from './ioK8sApiFlowcontrolV1beta1FlowDistinguisherMethod';
import { IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects } from './ioK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects';
import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference } from './ioK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference';

/**
* FlowSchemaSpec describes how the FlowSchema\'s specification looks like.
*/
export class IoK8sApiFlowcontrolV1beta1FlowSchemaSpec {
    'distinguisherMethod'?: IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod;
    /**
    * `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
    */
    'matchingPrecedence'?: number;
    'priorityLevelConfiguration': IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference;
    /**
    * `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
    */
    'rules'?: Array<IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distinguisherMethod",
            "baseName": "distinguisherMethod",
            "type": "IoK8sApiFlowcontrolV1beta1FlowDistinguisherMethod"
        },
        {
            "name": "matchingPrecedence",
            "baseName": "matchingPrecedence",
            "type": "number"
        },
        {
            "name": "priorityLevelConfiguration",
            "baseName": "priorityLevelConfiguration",
            "type": "IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationReference"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<IoK8sApiFlowcontrolV1beta1PolicyRulesWithSubjects>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1FlowSchemaSpec.attributeTypeMap;
    }
}

