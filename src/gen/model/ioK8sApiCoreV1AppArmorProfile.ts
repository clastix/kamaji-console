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
* AppArmorProfile defines a pod or container\'s AppArmor settings.
*/
export class IoK8sApiCoreV1AppArmorProfile {
    /**
    * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is \"Localhost\".
    */
    'localhostProfile'?: string;
    /**
    * type indicates which kind of AppArmor profile will be applied. Valid options are:   Localhost - a profile pre-loaded on the node.   RuntimeDefault - the container runtime\'s default profile.   Unconfined - no AppArmor enforcement.  Possible enum values:  - `\"Localhost\"` indicates that a profile pre-loaded on the node should be used.  - `\"RuntimeDefault\"` indicates that the container runtime\'s default AppArmor profile should be used.  - `\"Unconfined\"` indicates that no AppArmor profile should be enforced.
    */
    'type': IoK8sApiCoreV1AppArmorProfile.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "localhostProfile",
            "baseName": "localhostProfile",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IoK8sApiCoreV1AppArmorProfile.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1AppArmorProfile.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1AppArmorProfile {
    export enum TypeEnum {
        Localhost = <any> 'Localhost',
        RuntimeDefault = <any> 'RuntimeDefault',
        Unconfined = <any> 'Unconfined'
    }
}
