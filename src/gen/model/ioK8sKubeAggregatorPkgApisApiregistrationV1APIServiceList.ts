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
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from './ioK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIService } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIService';

/**
* APIServiceList is a list of APIService objects.
*/
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Items is the list of APIService
    */
    'items': Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ListMeta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ListMeta"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList.attributeTypeMap;
    }
}

