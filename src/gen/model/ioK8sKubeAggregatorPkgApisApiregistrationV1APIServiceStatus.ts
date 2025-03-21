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
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from './ioK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition';

/**
* APIServiceStatus contains derived information about an API server
*/
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
    /**
    * Current service state of apiService.
    */
    'conditions'?: Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus.attributeTypeMap;
    }
}

