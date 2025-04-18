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
import { IoK8sApiCoreV1PodTemplateSpec } from './ioK8sApiCoreV1PodTemplateSpec';

/**
* ReplicationControllerSpec is the specification of a replication controller.
*/
export class IoK8sApiCoreV1ReplicationControllerSpec {
    /**
    * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
    */
    'minReadySeconds'?: number;
    /**
    * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
    */
    'replicas'?: number;
    /**
    * Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
    */
    'selector'?: { [key: string]: string; };
    'template'?: IoK8sApiCoreV1PodTemplateSpec;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "minReadySeconds",
            "baseName": "minReadySeconds",
            "type": "number"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "IoK8sApiCoreV1PodTemplateSpec"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ReplicationControllerSpec.attributeTypeMap;
    }
}

