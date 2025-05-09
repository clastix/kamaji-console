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

/**
* ContainerStateRunning is a running state of a container.
*/
export class IoK8sApiCoreV1ContainerStateRunning {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerStateRunning.attributeTypeMap;
    }
}

