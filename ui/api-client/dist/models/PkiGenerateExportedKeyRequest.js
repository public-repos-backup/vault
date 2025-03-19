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
exports.PkiGenerateExportedKeyRequestKeyTypeEnum = void 0;
exports.instanceOfPkiGenerateExportedKeyRequest = instanceOfPkiGenerateExportedKeyRequest;
exports.PkiGenerateExportedKeyRequestFromJSON = PkiGenerateExportedKeyRequestFromJSON;
exports.PkiGenerateExportedKeyRequestFromJSONTyped = PkiGenerateExportedKeyRequestFromJSONTyped;
exports.PkiGenerateExportedKeyRequestToJSON = PkiGenerateExportedKeyRequestToJSON;
exports.PkiGenerateExportedKeyRequestToJSONTyped = PkiGenerateExportedKeyRequestToJSONTyped;
/**
 * @export
 * @enum {string}
 */
var PkiGenerateExportedKeyRequestKeyTypeEnum;
(function (PkiGenerateExportedKeyRequestKeyTypeEnum) {
    PkiGenerateExportedKeyRequestKeyTypeEnum["RSA"] = "rsa";
    PkiGenerateExportedKeyRequestKeyTypeEnum["EC"] = "ec";
    PkiGenerateExportedKeyRequestKeyTypeEnum["ED25519"] = "ed25519";
})(PkiGenerateExportedKeyRequestKeyTypeEnum || (exports.PkiGenerateExportedKeyRequestKeyTypeEnum = PkiGenerateExportedKeyRequestKeyTypeEnum = {}));
/**
 * Check if a given object implements the PkiGenerateExportedKeyRequest interface.
 */
function instanceOfPkiGenerateExportedKeyRequest(value) {
    return true;
}
function PkiGenerateExportedKeyRequestFromJSON(json) {
    return PkiGenerateExportedKeyRequestFromJSONTyped(json, false);
}
function PkiGenerateExportedKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        keyBits: json['key_bits'] == null ? undefined : json['key_bits'],
        keyName: json['key_name'] == null ? undefined : json['key_name'],
        keyType: json['key_type'] == null ? undefined : json['key_type'],
        managedKeyId: json['managed_key_id'] == null ? undefined : json['managed_key_id'],
        managedKeyName: json['managed_key_name'] == null ? undefined : json['managed_key_name'],
    };
}
function PkiGenerateExportedKeyRequestToJSON(json) {
    return PkiGenerateExportedKeyRequestToJSONTyped(json, false);
}
function PkiGenerateExportedKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        key_bits: value['keyBits'],
        key_name: value['keyName'],
        key_type: value['keyType'],
        managed_key_id: value['managedKeyId'],
        managed_key_name: value['managedKeyName'],
    };
}
