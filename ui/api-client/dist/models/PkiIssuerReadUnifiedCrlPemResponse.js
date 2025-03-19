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
exports.instanceOfPkiIssuerReadUnifiedCrlPemResponse = instanceOfPkiIssuerReadUnifiedCrlPemResponse;
exports.PkiIssuerReadUnifiedCrlPemResponseFromJSON = PkiIssuerReadUnifiedCrlPemResponseFromJSON;
exports.PkiIssuerReadUnifiedCrlPemResponseFromJSONTyped = PkiIssuerReadUnifiedCrlPemResponseFromJSONTyped;
exports.PkiIssuerReadUnifiedCrlPemResponseToJSON = PkiIssuerReadUnifiedCrlPemResponseToJSON;
exports.PkiIssuerReadUnifiedCrlPemResponseToJSONTyped = PkiIssuerReadUnifiedCrlPemResponseToJSONTyped;
/**
 * Check if a given object implements the PkiIssuerReadUnifiedCrlPemResponse interface.
 */
function instanceOfPkiIssuerReadUnifiedCrlPemResponse(value) {
    return true;
}
function PkiIssuerReadUnifiedCrlPemResponseFromJSON(json) {
    return PkiIssuerReadUnifiedCrlPemResponseFromJSONTyped(json, false);
}
function PkiIssuerReadUnifiedCrlPemResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        crl: json['crl'] == null ? undefined : json['crl'],
    };
}
function PkiIssuerReadUnifiedCrlPemResponseToJSON(json) {
    return PkiIssuerReadUnifiedCrlPemResponseToJSONTyped(json, false);
}
function PkiIssuerReadUnifiedCrlPemResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        crl: value['crl'],
    };
}
