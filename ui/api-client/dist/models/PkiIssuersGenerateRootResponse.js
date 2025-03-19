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
exports.instanceOfPkiIssuersGenerateRootResponse = instanceOfPkiIssuersGenerateRootResponse;
exports.PkiIssuersGenerateRootResponseFromJSON = PkiIssuersGenerateRootResponseFromJSON;
exports.PkiIssuersGenerateRootResponseFromJSONTyped = PkiIssuersGenerateRootResponseFromJSONTyped;
exports.PkiIssuersGenerateRootResponseToJSON = PkiIssuersGenerateRootResponseToJSON;
exports.PkiIssuersGenerateRootResponseToJSONTyped = PkiIssuersGenerateRootResponseToJSONTyped;
/**
 * Check if a given object implements the PkiIssuersGenerateRootResponse interface.
 */
function instanceOfPkiIssuersGenerateRootResponse(value) {
    return true;
}
function PkiIssuersGenerateRootResponseFromJSON(json) {
    return PkiIssuersGenerateRootResponseFromJSONTyped(json, false);
}
function PkiIssuersGenerateRootResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        certificate: json['certificate'] == null ? undefined : json['certificate'],
        expiration: json['expiration'] == null ? undefined : json['expiration'],
        issuerId: json['issuer_id'] == null ? undefined : json['issuer_id'],
        issuerName: json['issuer_name'] == null ? undefined : json['issuer_name'],
        issuingCa: json['issuing_ca'] == null ? undefined : json['issuing_ca'],
        keyId: json['key_id'] == null ? undefined : json['key_id'],
        keyName: json['key_name'] == null ? undefined : json['key_name'],
        privateKey: json['private_key'] == null ? undefined : json['private_key'],
        serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
    };
}
function PkiIssuersGenerateRootResponseToJSON(json) {
    return PkiIssuersGenerateRootResponseToJSONTyped(json, false);
}
function PkiIssuersGenerateRootResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        certificate: value['certificate'],
        expiration: value['expiration'],
        issuer_id: value['issuerId'],
        issuer_name: value['issuerName'],
        issuing_ca: value['issuingCa'],
        key_id: value['keyId'],
        key_name: value['keyName'],
        private_key: value['privateKey'],
        serial_number: value['serialNumber'],
    };
}
