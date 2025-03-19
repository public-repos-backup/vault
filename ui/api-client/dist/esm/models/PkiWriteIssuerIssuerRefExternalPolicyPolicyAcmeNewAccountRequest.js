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
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest(value) {
    return true;
}
export function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestFromJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        payload: json['payload'] == null ? undefined : json['payload'],
        _protected: json['protected'] == null ? undefined : json['protected'],
        signature: json['signature'] == null ? undefined : json['signature'],
    };
}
export function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestToJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        payload: value['payload'],
        protected: value['_protected'],
        signature: value['signature'],
    };
}
