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
exports.instanceOfPkiSignWithRoleResponse = instanceOfPkiSignWithRoleResponse;
exports.PkiSignWithRoleResponseFromJSON = PkiSignWithRoleResponseFromJSON;
exports.PkiSignWithRoleResponseFromJSONTyped = PkiSignWithRoleResponseFromJSONTyped;
exports.PkiSignWithRoleResponseToJSON = PkiSignWithRoleResponseToJSON;
exports.PkiSignWithRoleResponseToJSONTyped = PkiSignWithRoleResponseToJSONTyped;
/**
 * Check if a given object implements the PkiSignWithRoleResponse interface.
 */
function instanceOfPkiSignWithRoleResponse(value) {
    return true;
}
function PkiSignWithRoleResponseFromJSON(json) {
    return PkiSignWithRoleResponseFromJSONTyped(json, false);
}
function PkiSignWithRoleResponseFromJSONTyped(json, ignoreDiscriminator) {
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
function PkiSignWithRoleResponseToJSON(json) {
    return PkiSignWithRoleResponseToJSONTyped(json, false);
}
function PkiSignWithRoleResponseToJSONTyped(value, ignoreDiscriminator = false) {
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
