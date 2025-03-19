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
exports.instanceOfPkiConfigureCaRequest = instanceOfPkiConfigureCaRequest;
exports.PkiConfigureCaRequestFromJSON = PkiConfigureCaRequestFromJSON;
exports.PkiConfigureCaRequestFromJSONTyped = PkiConfigureCaRequestFromJSONTyped;
exports.PkiConfigureCaRequestToJSON = PkiConfigureCaRequestToJSON;
exports.PkiConfigureCaRequestToJSONTyped = PkiConfigureCaRequestToJSONTyped;
/**
 * Check if a given object implements the PkiConfigureCaRequest interface.
 */
function instanceOfPkiConfigureCaRequest(value) {
    return true;
}
function PkiConfigureCaRequestFromJSON(json) {
    return PkiConfigureCaRequestFromJSONTyped(json, false);
}
function PkiConfigureCaRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        pemBundle: json['pem_bundle'] == null ? undefined : json['pem_bundle'],
    };
}
function PkiConfigureCaRequestToJSON(json) {
    return PkiConfigureCaRequestToJSONTyped(json, false);
}
function PkiConfigureCaRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        pem_bundle: value['pemBundle'],
    };
}
