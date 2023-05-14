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
import { IoCertManagerV1ClusterIssuerSpecAcme } from './ioCertManagerV1ClusterIssuerSpecAcme';
import { IoCertManagerV1ClusterIssuerSpecCa } from './ioCertManagerV1ClusterIssuerSpecCa';
import { IoCertManagerV1ClusterIssuerSpecSelfSigned } from './ioCertManagerV1ClusterIssuerSpecSelfSigned';
import { IoCertManagerV1ClusterIssuerSpecVault } from './ioCertManagerV1ClusterIssuerSpecVault';
import { IoCertManagerV1ClusterIssuerSpecVenafi } from './ioCertManagerV1ClusterIssuerSpecVenafi';

/**
* Desired state of the Issuer resource.
*/
export class IoCertManagerV1IssuerSpec {
    'acme'?: IoCertManagerV1ClusterIssuerSpecAcme;
    'ca'?: IoCertManagerV1ClusterIssuerSpecCa;
    'selfSigned'?: IoCertManagerV1ClusterIssuerSpecSelfSigned;
    'vault'?: IoCertManagerV1ClusterIssuerSpecVault;
    'venafi'?: IoCertManagerV1ClusterIssuerSpecVenafi;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acme",
            "baseName": "acme",
            "type": "IoCertManagerV1ClusterIssuerSpecAcme"
        },
        {
            "name": "ca",
            "baseName": "ca",
            "type": "IoCertManagerV1ClusterIssuerSpecCa"
        },
        {
            "name": "selfSigned",
            "baseName": "selfSigned",
            "type": "IoCertManagerV1ClusterIssuerSpecSelfSigned"
        },
        {
            "name": "vault",
            "baseName": "vault",
            "type": "IoCertManagerV1ClusterIssuerSpecVault"
        },
        {
            "name": "venafi",
            "baseName": "venafi",
            "type": "IoCertManagerV1ClusterIssuerSpecVenafi"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1IssuerSpec.attributeTypeMap;
    }
}

