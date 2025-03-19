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
exports.instanceOfRawWriteRequest = instanceOfRawWriteRequest;
exports.RawWriteRequestFromJSON = RawWriteRequestFromJSON;
exports.RawWriteRequestFromJSONTyped = RawWriteRequestFromJSONTyped;
exports.RawWriteRequestToJSON = RawWriteRequestToJSON;
exports.RawWriteRequestToJSONTyped = RawWriteRequestToJSONTyped;
/**
 * Check if a given object implements the RawWriteRequest interface.
 */
function instanceOfRawWriteRequest(value) {
    return true;
}
function RawWriteRequestFromJSON(json) {
    return RawWriteRequestFromJSONTyped(json, false);
}
function RawWriteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        compressed: json['compressed'] == null ? undefined : json['compressed'],
        compressionType: json['compression_type'] == null ? undefined : json['compression_type'],
        encoding: json['encoding'] == null ? undefined : json['encoding'],
        value: json['value'] == null ? undefined : json['value'],
    };
}
function RawWriteRequestToJSON(json) {
    return RawWriteRequestToJSONTyped(json, false);
}
function RawWriteRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        compressed: value['compressed'],
        compression_type: value['compressionType'],
        encoding: value['encoding'],
        value: value['value'],
    };
}
