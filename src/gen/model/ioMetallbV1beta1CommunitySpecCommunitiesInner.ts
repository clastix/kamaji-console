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

export class IoMetallbV1beta1CommunitySpecCommunitiesInner {
    /**
    * The name of the alias for the community.
    */
    'name'?: string;
    /**
    * The BGP community value corresponding to the given name. Can be a standard community of the form 1234:1234 or a large community of the form large:1234:1234:1234.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoMetallbV1beta1CommunitySpecCommunitiesInner.attributeTypeMap;
    }
}
