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
 * Check if a given object implements the TransitSetCertificateForKeyRequest interface.
 */
export function instanceOfTransitSetCertificateForKeyRequest(value) {
    if (!('certificateChain' in value) || value['certificateChain'] === undefined)
        return false;
    return true;
}
export function TransitSetCertificateForKeyRequestFromJSON(json) {
    return TransitSetCertificateForKeyRequestFromJSONTyped(json, false);
}
export function TransitSetCertificateForKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        certificateChain: json['certificate_chain'],
        version: json['version'] == null ? undefined : json['version'],
    };
}
export function TransitSetCertificateForKeyRequestToJSON(json) {
    return TransitSetCertificateForKeyRequestToJSONTyped(json, false);
}
export function TransitSetCertificateForKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        certificate_chain: value['certificateChain'],
        version: value['version'],
    };
}
