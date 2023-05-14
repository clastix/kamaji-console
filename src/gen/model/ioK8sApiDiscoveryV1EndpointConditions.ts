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

/**
* EndpointConditions represents the current condition of an endpoint.
*/
export class IoK8sApiDiscoveryV1EndpointConditions {
    /**
    * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be \"true\" for terminating endpoints.
    */
    'ready'?: boolean;
    /**
    * serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition. This field can be enabled with the EndpointSliceTerminatingCondition feature gate.
    */
    'serving'?: boolean;
    /**
    * terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating. This field can be enabled with the EndpointSliceTerminatingCondition feature gate.
    */
    'terminating'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ready",
            "baseName": "ready",
            "type": "boolean"
        },
        {
            "name": "serving",
            "baseName": "serving",
            "type": "boolean"
        },
        {
            "name": "terminating",
            "baseName": "terminating",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiDiscoveryV1EndpointConditions.attributeTypeMap;
    }
}

