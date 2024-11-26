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
* NetworkPolicyPort describes a port to allow traffic on
*/
export class IoK8sApiNetworkingV1NetworkPolicyPort {
    /**
    * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
    */
    'endPort'?: number;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'port'?: string;
    /**
    * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
    */
    'protocol'?: IoK8sApiNetworkingV1NetworkPolicyPort.ProtocolEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endPort",
            "baseName": "endPort",
            "type": "number"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "IoK8sApiNetworkingV1NetworkPolicyPort.ProtocolEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiNetworkingV1NetworkPolicyPort.attributeTypeMap;
    }
}

export namespace IoK8sApiNetworkingV1NetworkPolicyPort {
    export enum ProtocolEnum {
        Sctp = <any> 'SCTP',
        Tcp = <any> 'TCP',
        Udp = <any> 'UDP'
    }
}
