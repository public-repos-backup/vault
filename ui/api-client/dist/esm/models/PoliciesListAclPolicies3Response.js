/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the PoliciesListAclPolicies3Response interface.
 */
export function instanceOfPoliciesListAclPolicies3Response(value) {
    return true;
}
export function PoliciesListAclPolicies3ResponseFromJSON(json) {
    return PoliciesListAclPolicies3ResponseFromJSONTyped(json, false);
}
export function PoliciesListAclPolicies3ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        keys: json['keys'] == null ? undefined : json['keys'],
        policies: json['policies'] == null ? undefined : json['policies'],
    };
}
export function PoliciesListAclPolicies3ResponseToJSON(json) {
    return PoliciesListAclPolicies3ResponseToJSONTyped(json, false);
}
export function PoliciesListAclPolicies3ResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        keys: value['keys'],
        policies: value['policies'],
    };
}
