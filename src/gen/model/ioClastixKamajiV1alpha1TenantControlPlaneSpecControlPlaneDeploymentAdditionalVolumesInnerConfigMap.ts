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
import { IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalVolumesInnerConfigMapItemsInner } from './ioClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalVolumesInnerConfigMapItemsInner';

/**
* configMap represents a configMap that should populate this volume
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalVolumesInnerConfigMap {
    /**
    * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
    */
    'items'?: Array<IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalVolumesInnerConfigMapItemsInner>;
    /**
    * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name'?: string;
    /**
    * optional specify whether the ConfigMap or its keys must be defined
    */
    'optional'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalVolumesInnerConfigMapItemsInner>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecControlPlaneDeploymentAdditionalVolumesInnerConfigMap.attributeTypeMap;
    }
}
