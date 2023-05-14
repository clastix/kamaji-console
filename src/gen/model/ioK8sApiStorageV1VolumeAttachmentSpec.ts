/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.23.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoK8sApiStorageV1VolumeAttachmentSource } from './ioK8sApiStorageV1VolumeAttachmentSource';

/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
export class IoK8sApiStorageV1VolumeAttachmentSpec {
    /**
    * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
    */
    'attacher': string;
    /**
    * The node that the volume should be attached to.
    */
    'nodeName': string;
    'source': IoK8sApiStorageV1VolumeAttachmentSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attacher",
            "baseName": "attacher",
            "type": "string"
        },
        {
            "name": "nodeName",
            "baseName": "nodeName",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "IoK8sApiStorageV1VolumeAttachmentSource"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiStorageV1VolumeAttachmentSpec.attributeTypeMap;
    }
}

