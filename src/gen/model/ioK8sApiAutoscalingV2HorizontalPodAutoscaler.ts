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
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus } from './ioK8sApiAutoscalingV2HorizontalPodAutoscalerStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
*/
export class IoK8sApiAutoscalingV2HorizontalPodAutoscaler {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec;
    'status'?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2HorizontalPodAutoscaler.attributeTypeMap;
    }
}

