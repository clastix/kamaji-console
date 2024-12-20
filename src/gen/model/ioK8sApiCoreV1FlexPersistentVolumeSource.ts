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
import { IoK8sApiCoreV1SecretReference } from './ioK8sApiCoreV1SecretReference';

/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
*/
export class IoK8sApiCoreV1FlexPersistentVolumeSource {
    /**
    * driver is the name of the driver to use for this volume.
    */
    'driver': string;
    /**
    * fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
    */
    'fsType'?: string;
    /**
    * options is Optional: this field holds extra command options if any.
    */
    'options'?: { [key: string]: string; };
    /**
    * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef'?: IoK8sApiCoreV1SecretReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string"
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoK8sApiCoreV1SecretReference"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1FlexPersistentVolumeSource.attributeTypeMap;
    }
}

