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
import { IoK8sApiAutoscalingV2MetricTarget } from './ioK8sApiAutoscalingV2MetricTarget';

/**
* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.
*/
export class IoK8sApiAutoscalingV2ContainerResourceMetricSource {
    /**
    * container is the name of the container in the pods of the scaling target
    */
    'container': string;
    /**
    * name is the name of the resource in question.
    */
    'name': string;
    'target': IoK8sApiAutoscalingV2MetricTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "IoK8sApiAutoscalingV2MetricTarget"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2ContainerResourceMetricSource.attributeTypeMap;
    }
}

