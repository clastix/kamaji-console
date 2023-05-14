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
import { IoK8sApiAutoscalingV2beta2MetricIdentifier } from './ioK8sApiAutoscalingV2beta2MetricIdentifier';
import { IoK8sApiAutoscalingV2beta2MetricTarget } from './ioK8sApiAutoscalingV2beta2MetricTarget';

/**
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
*/
export class IoK8sApiAutoscalingV2beta2PodsMetricSource {
    'metric': IoK8sApiAutoscalingV2beta2MetricIdentifier;
    'target': IoK8sApiAutoscalingV2beta2MetricTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metric",
            "baseName": "metric",
            "type": "IoK8sApiAutoscalingV2beta2MetricIdentifier"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "IoK8sApiAutoscalingV2beta2MetricTarget"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2beta2PodsMetricSource.attributeTypeMap;
    }
}

