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
import { IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec } from './ioK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec';
import { IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus } from './ioK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
*/
export class IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicy {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec;
    'status'?: IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus;

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
            "name": "spec",
            "baseName": "spec",
            "type": "IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicySpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicy.attributeTypeMap;
    }
}

