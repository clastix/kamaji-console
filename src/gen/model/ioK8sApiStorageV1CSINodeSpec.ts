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
import { IoK8sApiStorageV1CSINodeDriver } from './ioK8sApiStorageV1CSINodeDriver';

/**
* CSINodeSpec holds information about the specification of all CSI drivers installed on a node
*/
export class IoK8sApiStorageV1CSINodeSpec {
    /**
    * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
    */
    'drivers': Array<IoK8sApiStorageV1CSINodeDriver>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "drivers",
            "baseName": "drivers",
            "type": "Array<IoK8sApiStorageV1CSINodeDriver>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiStorageV1CSINodeSpec.attributeTypeMap;
    }
}

