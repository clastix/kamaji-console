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
* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
*/
export class IoK8sApiCoreV1ScopedResourceSelectorRequirement {
    /**
    * Represents a scope\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.  Possible enum values:  - `\"DoesNotExist\"`  - `\"Exists\"`  - `\"In\"`  - `\"NotIn\"`
    */
    'operator': IoK8sApiCoreV1ScopedResourceSelectorRequirement.OperatorEnum;
    /**
    * The name of the scope that the selector applies to.  Possible enum values:  - `\"BestEffort\"` Match all pod objects that have best effort quality of service  - `\"CrossNamespacePodAffinity\"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.  - `\"NotBestEffort\"` Match all pod objects that do not have best effort quality of service  - `\"NotTerminating\"` Match all pod objects where spec.activeDeadlineSeconds is nil  - `\"PriorityClass\"` Match all pod objects that have priority class mentioned  - `\"Terminating\"` Match all pod objects where spec.activeDeadlineSeconds >=0
    */
    'scopeName': IoK8sApiCoreV1ScopedResourceSelectorRequirement.ScopeNameEnum;
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    */
    'values'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "IoK8sApiCoreV1ScopedResourceSelectorRequirement.OperatorEnum"
        },
        {
            "name": "scopeName",
            "baseName": "scopeName",
            "type": "IoK8sApiCoreV1ScopedResourceSelectorRequirement.ScopeNameEnum"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ScopedResourceSelectorRequirement.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1ScopedResourceSelectorRequirement {
    export enum OperatorEnum {
        DoesNotExist = <any> 'DoesNotExist',
        Exists = <any> 'Exists',
        In = <any> 'In',
        NotIn = <any> 'NotIn'
    }
    export enum ScopeNameEnum {
        BestEffort = <any> 'BestEffort',
        CrossNamespacePodAffinity = <any> 'CrossNamespacePodAffinity',
        NotBestEffort = <any> 'NotBestEffort',
        NotTerminating = <any> 'NotTerminating',
        PriorityClass = <any> 'PriorityClass',
        Terminating = <any> 'Terminating'
    }
}
