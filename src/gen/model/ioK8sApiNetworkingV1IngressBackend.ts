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
import { IoK8sApiCoreV1TypedLocalObjectReference } from './ioK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiNetworkingV1IngressServiceBackend } from './ioK8sApiNetworkingV1IngressServiceBackend';

/**
* IngressBackend describes all endpoints for a given service and port.
*/
export class IoK8sApiNetworkingV1IngressBackend {
    'resource'?: IoK8sApiCoreV1TypedLocalObjectReference;
    'service'?: IoK8sApiNetworkingV1IngressServiceBackend;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resource",
            "baseName": "resource",
            "type": "IoK8sApiCoreV1TypedLocalObjectReference"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "IoK8sApiNetworkingV1IngressServiceBackend"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1IngressBackend.attributeTypeMap;
    }
}

