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
* ScaleSpec describes the attributes of a scale subresource.
*/
export class IoK8sApiAutoscalingV1ScaleSpec {
    /**
    * desired number of instances for the scaled object.
    */
    'replicas'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV1ScaleSpec.attributeTypeMap;
    }
}

