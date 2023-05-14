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

/**
* Describe a container image
*/
export class IoK8sApiCoreV1ContainerImage {
    /**
    * Names by which this image is known. e.g. [\"k8s.gcr.io/hyperkube:v1.0.7\", \"dockerhub.io/google_containers/hyperkube:v1.0.7\"]
    */
    'names'?: Array<string>;
    /**
    * The size of the image in bytes.
    */
    'sizeBytes'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<string>"
        },
        {
            "name": "sizeBytes",
            "baseName": "sizeBytes",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerImage.attributeTypeMap;
    }
}

