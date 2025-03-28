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
import { IoK8sApiCoreV1ResourceClaim } from './ioK8sApiCoreV1ResourceClaim';

/**
* ResourceRequirements describes the compute resource requirements.
*/
export class IoK8sApiCoreV1ResourceRequirements {
    /**
    * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers.
    */
    'claims'?: Array<IoK8sApiCoreV1ResourceClaim>;
    /**
    * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
    */
    'limits'?: { [key: string]: string; };
    /**
    * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
    */
    'requests'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claims",
            "baseName": "claims",
            "type": "Array<IoK8sApiCoreV1ResourceClaim>"
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ResourceRequirements.attributeTypeMap;
    }
}

