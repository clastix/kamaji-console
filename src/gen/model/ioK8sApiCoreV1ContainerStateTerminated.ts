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
* ContainerStateTerminated is a terminated state of a container.
*/
export class IoK8sApiCoreV1ContainerStateTerminated {
    /**
    * Container\'s ID in the format \'<type>://<container_id>\'
    */
    'containerID'?: string;
    /**
    * Exit status from the last termination of the container
    */
    'exitCode': number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'finishedAt'?: Date;
    /**
    * Message regarding the last termination of the container
    */
    'message'?: string;
    /**
    * (brief) reason from the last termination of the container
    */
    'reason'?: string;
    /**
    * Signal from the last termination of the container
    */
    'signal'?: number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerID",
            "baseName": "containerID",
            "type": "string"
        },
        {
            "name": "exitCode",
            "baseName": "exitCode",
            "type": "number"
        },
        {
            "name": "finishedAt",
            "baseName": "finishedAt",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "signal",
            "baseName": "signal",
            "type": "number"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerStateTerminated.attributeTypeMap;
    }
}

