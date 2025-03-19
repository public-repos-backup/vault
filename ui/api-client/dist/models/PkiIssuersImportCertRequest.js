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
exports.instanceOfPkiIssuersImportCertRequest = instanceOfPkiIssuersImportCertRequest;
exports.PkiIssuersImportCertRequestFromJSON = PkiIssuersImportCertRequestFromJSON;
exports.PkiIssuersImportCertRequestFromJSONTyped = PkiIssuersImportCertRequestFromJSONTyped;
exports.PkiIssuersImportCertRequestToJSON = PkiIssuersImportCertRequestToJSON;
exports.PkiIssuersImportCertRequestToJSONTyped = PkiIssuersImportCertRequestToJSONTyped;
/**
 * Check if a given object implements the PkiIssuersImportCertRequest interface.
 */
function instanceOfPkiIssuersImportCertRequest(value) {
    return true;
}
function PkiIssuersImportCertRequestFromJSON(json) {
    return PkiIssuersImportCertRequestFromJSONTyped(json, false);
}
function PkiIssuersImportCertRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        pemBundle: json['pem_bundle'] == null ? undefined : json['pem_bundle'],
    };
}
function PkiIssuersImportCertRequestToJSON(json) {
    return PkiIssuersImportCertRequestToJSONTyped(json, false);
}
function PkiIssuersImportCertRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        pem_bundle: value['pemBundle'],
    };
}
