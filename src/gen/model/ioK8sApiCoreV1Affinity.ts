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
import { IoK8sApiCoreV1NodeAffinity } from './ioK8sApiCoreV1NodeAffinity';
import { IoK8sApiCoreV1PodAffinity } from './ioK8sApiCoreV1PodAffinity';
import { IoK8sApiCoreV1PodAntiAffinity } from './ioK8sApiCoreV1PodAntiAffinity';

/**
* Affinity is a group of affinity scheduling rules.
*/
export class IoK8sApiCoreV1Affinity {
    'nodeAffinity'?: IoK8sApiCoreV1NodeAffinity;
    'podAffinity'?: IoK8sApiCoreV1PodAffinity;
    'podAntiAffinity'?: IoK8sApiCoreV1PodAntiAffinity;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeAffinity",
            "baseName": "nodeAffinity",
            "type": "IoK8sApiCoreV1NodeAffinity"
        },
        {
            "name": "podAffinity",
            "baseName": "podAffinity",
            "type": "IoK8sApiCoreV1PodAffinity"
        },
        {
            "name": "podAntiAffinity",
            "baseName": "podAntiAffinity",
            "type": "IoK8sApiCoreV1PodAntiAffinity"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Affinity.attributeTypeMap;
    }
}

