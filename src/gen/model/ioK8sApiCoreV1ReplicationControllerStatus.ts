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
import { IoK8sApiCoreV1ReplicationControllerCondition } from './ioK8sApiCoreV1ReplicationControllerCondition';

/**
* ReplicationControllerStatus represents the current status of a replication controller.
*/
export class IoK8sApiCoreV1ReplicationControllerStatus {
    /**
    * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
    */
    'availableReplicas'?: number;
    /**
    * Represents the latest available observations of a replication controller\'s current state.
    */
    'conditions'?: Array<IoK8sApiCoreV1ReplicationControllerCondition>;
    /**
    * The number of pods that have labels matching the labels of the pod template of the replication controller.
    */
    'fullyLabeledReplicas'?: number;
    /**
    * ObservedGeneration reflects the generation of the most recently observed replication controller.
    */
    'observedGeneration'?: number;
    /**
    * The number of ready replicas for this replication controller.
    */
    'readyReplicas'?: number;
    /**
    * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
    */
    'replicas': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "availableReplicas",
            "baseName": "availableReplicas",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiCoreV1ReplicationControllerCondition>"
        },
        {
            "name": "fullyLabeledReplicas",
            "baseName": "fullyLabeledReplicas",
            "type": "number"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ReplicationControllerStatus.attributeTypeMap;
    }
}

