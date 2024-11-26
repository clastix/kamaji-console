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
import { IoK8sApiAdmissionregistrationV1TypeChecking } from './ioK8sApiAdmissionregistrationV1TypeChecking';
import { IoK8sApimachineryPkgApisMetaV1Condition } from './ioK8sApimachineryPkgApisMetaV1Condition';

/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
*/
export class IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus {
    /**
    * The conditions represent the latest available observations of a policy\'s current state.
    */
    'conditions'?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
    /**
    * The generation observed by the controller.
    */
    'observedGeneration'?: number;
    'typeChecking'?: IoK8sApiAdmissionregistrationV1TypeChecking;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1Condition>"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "typeChecking",
            "baseName": "typeChecking",
            "type": "IoK8sApiAdmissionregistrationV1TypeChecking"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAdmissionregistrationV1ValidatingAdmissionPolicyStatus.attributeTypeMap;
    }
}

