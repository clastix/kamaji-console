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
import { IoK8sApiCoreV1ContainerStateRunning } from './ioK8sApiCoreV1ContainerStateRunning';
import { IoK8sApiCoreV1ContainerStateTerminated } from './ioK8sApiCoreV1ContainerStateTerminated';
import { IoK8sApiCoreV1ContainerStateWaiting } from './ioK8sApiCoreV1ContainerStateWaiting';

/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
export class IoK8sApiCoreV1ContainerState {
    'running'?: IoK8sApiCoreV1ContainerStateRunning;
    'terminated'?: IoK8sApiCoreV1ContainerStateTerminated;
    'waiting'?: IoK8sApiCoreV1ContainerStateWaiting;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "running",
            "baseName": "running",
            "type": "IoK8sApiCoreV1ContainerStateRunning"
        },
        {
            "name": "terminated",
            "baseName": "terminated",
            "type": "IoK8sApiCoreV1ContainerStateTerminated"
        },
        {
            "name": "waiting",
            "baseName": "waiting",
            "type": "IoK8sApiCoreV1ContainerStateWaiting"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerState.attributeTypeMap;
    }
}

