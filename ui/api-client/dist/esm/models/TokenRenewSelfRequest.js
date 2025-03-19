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
 * Check if a given object implements the TokenRenewSelfRequest interface.
 */
export function instanceOfTokenRenewSelfRequest(value) {
    return true;
}
export function TokenRenewSelfRequestFromJSON(json) {
    return TokenRenewSelfRequestFromJSONTyped(json, false);
}
export function TokenRenewSelfRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        increment: json['increment'] == null ? undefined : json['increment'],
        token: json['token'] == null ? undefined : json['token'],
    };
}
export function TokenRenewSelfRequestToJSON(json) {
    return TokenRenewSelfRequestToJSONTyped(json, false);
}
export function TokenRenewSelfRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        increment: value['increment'],
        token: value['token'],
    };
}
