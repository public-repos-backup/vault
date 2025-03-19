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
 * Check if a given object implements the PkiWriteExternalPolicySignIntermediateResponse interface.
 */
export function instanceOfPkiWriteExternalPolicySignIntermediateResponse(value) {
    return true;
}
export function PkiWriteExternalPolicySignIntermediateResponseFromJSON(json) {
    return PkiWriteExternalPolicySignIntermediateResponseFromJSONTyped(json, false);
}
export function PkiWriteExternalPolicySignIntermediateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        caChain: json['ca_chain'] == null ? undefined : json['ca_chain'],
        certificate: json['certificate'] == null ? undefined : json['certificate'],
        expiration: json['expiration'] == null ? undefined : json['expiration'],
        issuingCa: json['issuing_ca'] == null ? undefined : json['issuing_ca'],
        serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
    };
}
export function PkiWriteExternalPolicySignIntermediateResponseToJSON(json) {
    return PkiWriteExternalPolicySignIntermediateResponseToJSONTyped(json, false);
}
export function PkiWriteExternalPolicySignIntermediateResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        ca_chain: value['caChain'],
        certificate: value['certificate'],
        expiration: value['expiration'],
        issuing_ca: value['issuingCa'],
        serial_number: value['serialNumber'],
    };
}
