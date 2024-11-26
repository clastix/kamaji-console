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
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerCondition';
import { IoK8sApiAutoscalingV2MetricStatus } from './ioK8sApiAutoscalingV2MetricStatus';

/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
export class IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus {
    /**
    * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
    */
    'conditions'?: Array<IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>;
    /**
    * currentMetrics is the last read state of the metrics used by this autoscaler.
    */
    'currentMetrics'?: Array<IoK8sApiAutoscalingV2MetricStatus>;
    /**
    * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
    */
    'currentReplicas'?: number;
    /**
    * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
    */
    'desiredReplicas': number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'lastScaleTime'?: Date;
    /**
    * observedGeneration is the most recent generation observed by this autoscaler.
    */
    'observedGeneration'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition>"
        },
        {
            "name": "currentMetrics",
            "baseName": "currentMetrics",
            "type": "Array<IoK8sApiAutoscalingV2MetricStatus>"
        },
        {
            "name": "currentReplicas",
            "baseName": "currentReplicas",
            "type": "number"
        },
        {
            "name": "desiredReplicas",
            "baseName": "desiredReplicas",
            "type": "number"
        },
        {
            "name": "lastScaleTime",
            "baseName": "lastScaleTime",
            "type": "Date"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus.attributeTypeMap;
    }
}

