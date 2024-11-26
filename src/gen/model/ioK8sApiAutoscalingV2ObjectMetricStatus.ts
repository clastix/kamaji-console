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
import { IoK8sApiAutoscalingV2CrossVersionObjectReference } from './ioK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2MetricIdentifier } from './ioK8sApiAutoscalingV2MetricIdentifier';
import { IoK8sApiAutoscalingV2MetricValueStatus } from './ioK8sApiAutoscalingV2MetricValueStatus';

/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export class IoK8sApiAutoscalingV2ObjectMetricStatus {
    'current': IoK8sApiAutoscalingV2MetricValueStatus;
    'describedObject': IoK8sApiAutoscalingV2CrossVersionObjectReference;
    'metric': IoK8sApiAutoscalingV2MetricIdentifier;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "IoK8sApiAutoscalingV2MetricValueStatus"
        },
        {
            "name": "describedObject",
            "baseName": "describedObject",
            "type": "IoK8sApiAutoscalingV2CrossVersionObjectReference"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "IoK8sApiAutoscalingV2MetricIdentifier"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2ObjectMetricStatus.attributeTypeMap;
    }
}

