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
exports.instanceOfTransitImportKeyVersionRequest = instanceOfTransitImportKeyVersionRequest;
exports.TransitImportKeyVersionRequestFromJSON = TransitImportKeyVersionRequestFromJSON;
exports.TransitImportKeyVersionRequestFromJSONTyped = TransitImportKeyVersionRequestFromJSONTyped;
exports.TransitImportKeyVersionRequestToJSON = TransitImportKeyVersionRequestToJSON;
exports.TransitImportKeyVersionRequestToJSONTyped = TransitImportKeyVersionRequestToJSONTyped;
/**
 * Check if a given object implements the TransitImportKeyVersionRequest interface.
 */
function instanceOfTransitImportKeyVersionRequest(value) {
    return true;
}
function TransitImportKeyVersionRequestFromJSON(json) {
    return TransitImportKeyVersionRequestFromJSONTyped(json, false);
}
function TransitImportKeyVersionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        ciphertext: json['ciphertext'] == null ? undefined : json['ciphertext'],
        hashFunction: json['hash_function'] == null ? undefined : json['hash_function'],
        publicKey: json['public_key'] == null ? undefined : json['public_key'],
        version: json['version'] == null ? undefined : json['version'],
    };
}
function TransitImportKeyVersionRequestToJSON(json) {
    return TransitImportKeyVersionRequestToJSONTyped(json, false);
}
function TransitImportKeyVersionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        ciphertext: value['ciphertext'],
        hash_function: value['hashFunction'],
        public_key: value['publicKey'],
        version: value['version'],
    };
}
