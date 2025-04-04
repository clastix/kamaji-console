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
* HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod\'s hosts file.
*/
export class IoK8sApiCoreV1HostAlias {
    /**
    * Hostnames for the above IP address.
    */
    'hostnames'?: Array<string>;
    /**
    * IP address of the host file entry.
    */
    'ip'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostnames",
            "baseName": "hostnames",
            "type": "Array<string>"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1HostAlias.attributeTypeMap;
    }
}

