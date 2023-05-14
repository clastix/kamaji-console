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
import { IoK8sApiFlowcontrolV1beta1LimitResponse } from './ioK8sApiFlowcontrolV1beta1LimitResponse';

/**
* LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:  * How are requests for this priority level limited?  * What should be done with requests that exceed the limit?
*/
export class IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration {
    /**
    * `assuredConcurrencyShares` (ACS) configures the execution limit, which is a limit on the number of requests of this priority level that may be exeucting at a given time.  ACS must be a positive number. The server\'s concurrency limit (SCL) is divided among the concurrency-controlled priority levels in proportion to their assured concurrency shares. This produces the assured concurrency value (ACV) --- the number of requests that may be executing at a time --- for each such priority level:              ACV(l) = ceil( SCL * ACS(l) / ( sum[priority levels k] ACS(k) ) )  bigger numbers of ACS mean more reserved concurrent requests (at the expense of every other PL). This field has a default value of 30.
    */
    'assuredConcurrencyShares'?: number;
    'limitResponse'?: IoK8sApiFlowcontrolV1beta1LimitResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assuredConcurrencyShares",
            "baseName": "assuredConcurrencyShares",
            "type": "number"
        },
        {
            "name": "limitResponse",
            "baseName": "limitResponse",
            "type": "IoK8sApiFlowcontrolV1beta1LimitResponse"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1LimitedPriorityLevelConfiguration.attributeTypeMap;
    }
}

