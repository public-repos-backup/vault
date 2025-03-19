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
 * Check if a given object implements the PkiSetSignedIntermediateRequest interface.
 */
export function instanceOfPkiSetSignedIntermediateRequest(value) {
    return true;
}
export function PkiSetSignedIntermediateRequestFromJSON(json) {
    return PkiSetSignedIntermediateRequestFromJSONTyped(json, false);
}
export function PkiSetSignedIntermediateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        certificate: json['certificate'] == null ? undefined : json['certificate'],
    };
}
export function PkiSetSignedIntermediateRequestToJSON(json) {
    return PkiSetSignedIntermediateRequestToJSONTyped(json, false);
}
export function PkiSetSignedIntermediateRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        certificate: value['certificate'],
    };
}
