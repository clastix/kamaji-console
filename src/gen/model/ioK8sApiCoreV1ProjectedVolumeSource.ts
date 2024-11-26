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
import { IoK8sApiCoreV1VolumeProjection } from './ioK8sApiCoreV1VolumeProjection';

/**
* Represents a projected volume source
*/
export class IoK8sApiCoreV1ProjectedVolumeSource {
    /**
    * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * sources is the list of volume projections
    */
    'sources'?: Array<IoK8sApiCoreV1VolumeProjection>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<IoK8sApiCoreV1VolumeProjection>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ProjectedVolumeSource.attributeTypeMap;
    }
}

