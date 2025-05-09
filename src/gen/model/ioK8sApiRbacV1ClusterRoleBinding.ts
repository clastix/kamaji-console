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
import { IoK8sApiRbacV1RoleRef } from './ioK8sApiRbacV1RoleRef';
import { IoK8sApiRbacV1Subject } from './ioK8sApiRbacV1Subject';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
*/
export class IoK8sApiRbacV1ClusterRoleBinding {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'roleRef': IoK8sApiRbacV1RoleRef;
    /**
    * Subjects holds references to the objects the role applies to.
    */
    'subjects'?: Array<IoK8sApiRbacV1Subject>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "roleRef",
            "baseName": "roleRef",
            "type": "IoK8sApiRbacV1RoleRef"
        },
        {
            "name": "subjects",
            "baseName": "subjects",
            "type": "Array<IoK8sApiRbacV1Subject>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiRbacV1ClusterRoleBinding.attributeTypeMap;
    }
}

