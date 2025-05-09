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
* Spec to control the desired behavior of daemon set rolling update.
*/
export class IoK8sApiAppsV1RollingUpdateDaemonSet {
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxSurge'?: string;
    /**
    * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
    */
    'maxUnavailable'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxSurge",
            "baseName": "maxSurge",
            "type": "string"
        },
        {
            "name": "maxUnavailable",
            "baseName": "maxUnavailable",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1RollingUpdateDaemonSet.attributeTypeMap;
    }
}

