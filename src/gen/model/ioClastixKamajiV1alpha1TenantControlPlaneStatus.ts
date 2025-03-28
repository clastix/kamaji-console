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
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusAddons } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusAddons';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificates } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusCertificates';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources';
import { IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage } from './ioClastixKamajiV1alpha1TenantControlPlaneStatusStorage';

/**
* TenantControlPlaneStatus defines the observed state of TenantControlPlane.
*/
export class IoClastixKamajiV1alpha1TenantControlPlaneStatus {
    'addons'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusAddons;
    'certificates'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificates;
    /**
    * ControlPlaneEndpoint contains the status of the kubernetes control plane
    */
    'controlPlaneEndpoint'?: string;
    'kubeadmPhase'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase;
    'kubeadmconfig'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig;
    'kubeconfig'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig;
    'kubernetesResources'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources;
    'storage'?: IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addons",
            "baseName": "addons",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusAddons"
        },
        {
            "name": "certificates",
            "baseName": "certificates",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusCertificates"
        },
        {
            "name": "controlPlaneEndpoint",
            "baseName": "controlPlaneEndpoint",
            "type": "string"
        },
        {
            "name": "kubeadmPhase",
            "baseName": "kubeadmPhase",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmPhase"
        },
        {
            "name": "kubeadmconfig",
            "baseName": "kubeadmconfig",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeadmconfig"
        },
        {
            "name": "kubeconfig",
            "baseName": "kubeconfig",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubeconfig"
        },
        {
            "name": "kubernetesResources",
            "baseName": "kubernetesResources",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusKubernetesResources"
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "IoClastixKamajiV1alpha1TenantControlPlaneStatusStorage"
        }    ];

    static getAttributeTypeMap() {
        return IoClastixKamajiV1alpha1TenantControlPlaneStatus.attributeTypeMap;
    }
}

