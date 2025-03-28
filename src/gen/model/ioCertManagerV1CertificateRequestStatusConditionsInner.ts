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

/**
* CertificateRequestCondition contains condition information for a CertificateRequest.
*/
export class IoCertManagerV1CertificateRequestStatusConditionsInner {
    /**
    * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
    */
    'lastTransitionTime'?: Date;
    /**
    * Message is a human readable description of the details of the last transition, complementing reason.
    */
    'message'?: string;
    /**
    * Reason is a brief machine readable explanation for the condition\'s last transition.
    */
    'reason'?: string;
    /**
    * Status of the condition, one of (`True`, `False`, `Unknown`).
    */
    'status': IoCertManagerV1CertificateRequestStatusConditionsInner.StatusEnum;
    /**
    * Type of the condition, known values are (`Ready`, `InvalidRequest`, `Approved`, `Denied`).
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IoCertManagerV1CertificateRequestStatusConditionsInner.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateRequestStatusConditionsInner.attributeTypeMap;
    }
}

export namespace IoCertManagerV1CertificateRequestStatusConditionsInner {
    export enum StatusEnum {
        True = <any> 'True',
        False = <any> 'False',
        Unknown = <any> 'Unknown'
    }
}
