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
import { IoK8sApiNetworkingV1IngressPortStatus } from './ioK8sApiNetworkingV1IngressPortStatus';

/**
* IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
*/
export class IoK8sApiNetworkingV1IngressLoadBalancerIngress {
    /**
    * hostname is set for load-balancer ingress points that are DNS based.
    */
    'hostname'?: string;
    /**
    * ip is set for load-balancer ingress points that are IP based.
    */
    'ip'?: string;
    /**
    * ports provides information about the ports exposed by this LoadBalancer.
    */
    'ports'?: Array<IoK8sApiNetworkingV1IngressPortStatus>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<IoK8sApiNetworkingV1IngressPortStatus>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1IngressLoadBalancerIngress.attributeTypeMap;
    }
}

