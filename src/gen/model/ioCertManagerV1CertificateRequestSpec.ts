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
import { IoCertManagerV1CertificateRequestSpecIssuerRef } from './ioCertManagerV1CertificateRequestSpecIssuerRef';

/**
* Desired state of the CertificateRequest resource.
*/
export class IoCertManagerV1CertificateRequestSpec {
    /**
    * The requested \'duration\' (i.e. lifetime) of the Certificate. This option may be ignored/overridden by some issuer types.
    */
    'duration'?: string;
    /**
    * Extra contains extra attributes of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
    */
    'extra'?: { [key: string]: Array<string>; };
    /**
    * Groups contains group membership of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
    */
    'groups'?: Array<string>;
    /**
    * IsCA will request to mark the certificate as valid for certificate signing when submitting to the issuer. This will automatically add the `cert sign` usage to the list of `usages`.
    */
    'isCA'?: boolean;
    'issuerRef': IoCertManagerV1CertificateRequestSpecIssuerRef;
    /**
    * The PEM-encoded x509 certificate signing request to be submitted to the CA for signing.
    */
    'request': string;
    /**
    * UID contains the uid of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
    */
    'uid'?: string;
    /**
    * Usages is the set of x509 usages that are requested for the certificate. If usages are set they SHOULD be encoded inside the CSR spec Defaults to `digital signature` and `key encipherment` if not specified.
    */
    'usages'?: Array<IoCertManagerV1CertificateRequestSpec.UsagesEnum>;
    /**
    * Username contains the name of the user that created the CertificateRequest. Populated by the cert-manager webhook on creation and immutable.
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        },
        {
            "name": "isCA",
            "baseName": "isCA",
            "type": "boolean"
        },
        {
            "name": "issuerRef",
            "baseName": "issuerRef",
            "type": "IoCertManagerV1CertificateRequestSpecIssuerRef"
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "usages",
            "baseName": "usages",
            "type": "Array<IoCertManagerV1CertificateRequestSpec.UsagesEnum>"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateRequestSpec.attributeTypeMap;
    }
}

export namespace IoCertManagerV1CertificateRequestSpec {
    export enum UsagesEnum {
        Signing = <any> 'signing',
        DigitalSignature = <any> 'digital signature',
        ContentCommitment = <any> 'content commitment',
        KeyEncipherment = <any> 'key encipherment',
        KeyAgreement = <any> 'key agreement',
        DataEncipherment = <any> 'data encipherment',
        CertSign = <any> 'cert sign',
        CrlSign = <any> 'crl sign',
        EncipherOnly = <any> 'encipher only',
        DecipherOnly = <any> 'decipher only',
        Any = <any> 'any',
        ServerAuth = <any> 'server auth',
        ClientAuth = <any> 'client auth',
        CodeSigning = <any> 'code signing',
        EmailProtection = <any> 'email protection',
        SMime = <any> 's/mime',
        IpsecEndSystem = <any> 'ipsec end system',
        IpsecTunnel = <any> 'ipsec tunnel',
        IpsecUser = <any> 'ipsec user',
        Timestamping = <any> 'timestamping',
        OcspSigning = <any> 'ocsp signing',
        MicrosoftSgc = <any> 'microsoft sgc',
        NetscapeSgc = <any> 'netscape sgc'
    }
}
