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
import { IoCertManagerV1CertificateStatusConditionsInner } from './ioCertManagerV1CertificateStatusConditionsInner';

/**
* Status of the Certificate. This is set and managed automatically.
*/
export class IoCertManagerV1CertificateStatus {
    /**
    * List of status conditions to indicate the status of certificates. Known condition types are `Ready` and `Issuing`.
    */
    'conditions'?: Array<IoCertManagerV1CertificateStatusConditionsInner>;
    /**
    * The number of continuous failed issuance attempts up till now. This field gets removed (if set) on a successful issuance and gets set to 1 if unset and an issuance has failed. If an issuance has failed, the delay till the next issuance will be calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts - 1).
    */
    'failedIssuanceAttempts'?: number;
    /**
    * LastFailureTime is set only if the lastest issuance for this Certificate failed and contains the time of the failure. If an issuance has failed, the delay till the next issuance will be calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts - 1). If the latest issuance has succeeded this field will be unset.
    */
    'lastFailureTime'?: Date;
    /**
    * The name of the Secret resource containing the private key to be used for the next certificate iteration. The keymanager controller will automatically set this field if the `Issuing` condition is set to `True`. It will automatically unset this field when the Issuing condition is not set or False.
    */
    'nextPrivateKeySecretName'?: string;
    /**
    * The expiration time of the certificate stored in the secret named by this resource in `spec.secretName`.
    */
    'notAfter'?: Date;
    /**
    * The time after which the certificate stored in the secret named by this resource in spec.secretName is valid.
    */
    'notBefore'?: Date;
    /**
    * RenewalTime is the time at which the certificate will be next renewed. If not set, no upcoming renewal is scheduled.
    */
    'renewalTime'?: Date;
    /**
    * The current \'revision\' of the certificate as issued.   When a CertificateRequest resource is created, it will have the `cert-manager.io/certificate-revision` set to one greater than the current value of this field.   Upon issuance, this field will be set to the value of the annotation on the CertificateRequest resource used to issue the certificate.   Persisting the value on the CertificateRequest resource allows the certificates controller to know whether a request is part of an old issuance or if it is part of the ongoing revision\'s issuance by checking if the revision value in the annotation is greater than this field.
    */
    'revision'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoCertManagerV1CertificateStatusConditionsInner>"
        },
        {
            "name": "failedIssuanceAttempts",
            "baseName": "failedIssuanceAttempts",
            "type": "number"
        },
        {
            "name": "lastFailureTime",
            "baseName": "lastFailureTime",
            "type": "Date"
        },
        {
            "name": "nextPrivateKeySecretName",
            "baseName": "nextPrivateKeySecretName",
            "type": "string"
        },
        {
            "name": "notAfter",
            "baseName": "notAfter",
            "type": "Date"
        },
        {
            "name": "notBefore",
            "baseName": "notBefore",
            "type": "Date"
        },
        {
            "name": "renewalTime",
            "baseName": "renewalTime",
            "type": "Date"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateStatus.attributeTypeMap;
    }
}

