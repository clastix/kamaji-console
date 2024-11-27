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
* IngressPortStatus represents the error condition of a service port
*/
export class IoK8sApiNetworkingV1IngressPortStatus {
    /**
    * error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use   CamelCase names - cloud provider specific error values must have names that comply with the   format foo.example.com/CamelCase.
    */
    'error'?: string;
    /**
    * port is the port number of the ingress port.
    */
    'port': number;
    /**
    * protocol is the protocol of the ingress port. The supported values are: \"TCP\", \"UDP\", \"SCTP\"  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
    */
    'protocol': IoK8sApiNetworkingV1IngressPortStatus.ProtocolEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "IoK8sApiNetworkingV1IngressPortStatus.ProtocolEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1IngressPortStatus.attributeTypeMap;
    }
}

export namespace IoK8sApiNetworkingV1IngressPortStatus {
    export enum ProtocolEnum {
        Sctp = <any> 'SCTP',
        Tcp = <any> 'TCP',
        Udp = <any> 'UDP'
    }
}