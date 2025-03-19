"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPkiReadCrlDeltaPemResponse = instanceOfPkiReadCrlDeltaPemResponse;
exports.PkiReadCrlDeltaPemResponseFromJSON = PkiReadCrlDeltaPemResponseFromJSON;
exports.PkiReadCrlDeltaPemResponseFromJSONTyped = PkiReadCrlDeltaPemResponseFromJSONTyped;
exports.PkiReadCrlDeltaPemResponseToJSON = PkiReadCrlDeltaPemResponseToJSON;
exports.PkiReadCrlDeltaPemResponseToJSONTyped = PkiReadCrlDeltaPemResponseToJSONTyped;
/**
 * Check if a given object implements the PkiReadCrlDeltaPemResponse interface.
 */
function instanceOfPkiReadCrlDeltaPemResponse(value) {
    return true;
}
function PkiReadCrlDeltaPemResponseFromJSON(json) {
    return PkiReadCrlDeltaPemResponseFromJSONTyped(json, false);
}
function PkiReadCrlDeltaPemResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        caChain: json['ca_chain'] == null ? undefined : json['ca_chain'],
        certificate: json['certificate'] == null ? undefined : json['certificate'],
        issuerId: json['issuer_id'] == null ? undefined : json['issuer_id'],
        revocationTime: json['revocation_time'] == null ? undefined : json['revocation_time'],
        revocationTimeRfc3339: json['revocation_time_rfc3339'] == null ? undefined : json['revocation_time_rfc3339'],
    };
}
function PkiReadCrlDeltaPemResponseToJSON(json) {
    return PkiReadCrlDeltaPemResponseToJSONTyped(json, false);
}
function PkiReadCrlDeltaPemResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        ca_chain: value['caChain'],
        certificate: value['certificate'],
        issuer_id: value['issuerId'],
        revocation_time: value['revocationTime'],
        revocation_time_rfc3339: value['revocationTimeRfc3339'],
    };
}
