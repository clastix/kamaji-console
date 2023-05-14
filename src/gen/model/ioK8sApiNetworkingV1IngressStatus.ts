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
import { IoK8sApiCoreV1LoadBalancerStatus } from './ioK8sApiCoreV1LoadBalancerStatus';

/**
* IngressStatus describe the current state of the Ingress.
*/
export class IoK8sApiNetworkingV1IngressStatus {
    'loadBalancer'?: IoK8sApiCoreV1LoadBalancerStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "IoK8sApiCoreV1LoadBalancerStatus"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1IngressStatus.attributeTypeMap;
    }
}

