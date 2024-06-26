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

export class IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet {
    /**
    * CGroupFS defines the  cgroup driver for Kubelet https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/configure-cgroup-driver/
    */
    'cgroupfs'?: IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet.CgroupfsEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cgroupfs",
            "baseName": "cgroupfs",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet.CgroupfsEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet.attributeTypeMap;
    }
}

export namespace IoClastixKamajiV1alpha1TenantControlPlaneSpecKubernetesKubelet {
    export enum CgroupfsEnum {
        Systemd = <any> 'systemd',
        Cgroupfs = <any> 'cgroupfs'
    }
}
