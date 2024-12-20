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
import { IoK8sApiCoreV1ObjectReference } from './ioK8sApiCoreV1ObjectReference';

/**
* EndpointAddress is a tuple that describes single IP address.
*/
export class IoK8sApiCoreV1EndpointAddress {
    /**
    * The Hostname of this endpoint
    */
    'hostname'?: string;
    /**
    * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
    */
    'ip': string;
    /**
    * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
    */
    'nodeName'?: string;
    'targetRef'?: IoK8sApiCoreV1ObjectReference;

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
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string"
        },
        {
            "name": "targetRef",
            "baseName": "targetRef",
            "type": "IoK8sApiCoreV1ObjectReference"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1EndpointAddress.attributeTypeMap;
    }
}

