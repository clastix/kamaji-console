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
* Enables the kube-proxy addon in the Tenant Cluster. The registry and the tag are configurable, the image is hard-coded to `kube-proxy`.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy {
    /**
    * ImageRepository sets the container registry to pull images from. if not set, the default ImageRepository will be used instead.
    */
    'imageRepository'?: string;
    /**
    * ImageTag allows to specify a tag for the image. In case this value is set, kubeadm does not change automatically the version of the above components during upgrades.
    */
    'imageTag'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imageRepository",
            "baseName": "imageRepository",
            "type": "string"
        },
        {
            "name": "imageTag",
            "baseName": "imageTag",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecAddonsKubeProxy.attributeTypeMap;
    }
}

