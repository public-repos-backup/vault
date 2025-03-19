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
exports.instanceOfGenerateRandomWithBytesResponse = instanceOfGenerateRandomWithBytesResponse;
exports.GenerateRandomWithBytesResponseFromJSON = GenerateRandomWithBytesResponseFromJSON;
exports.GenerateRandomWithBytesResponseFromJSONTyped = GenerateRandomWithBytesResponseFromJSONTyped;
exports.GenerateRandomWithBytesResponseToJSON = GenerateRandomWithBytesResponseToJSON;
exports.GenerateRandomWithBytesResponseToJSONTyped = GenerateRandomWithBytesResponseToJSONTyped;
/**
 * Check if a given object implements the GenerateRandomWithBytesResponse interface.
 */
function instanceOfGenerateRandomWithBytesResponse(value) {
    return true;
}
function GenerateRandomWithBytesResponseFromJSON(json) {
    return GenerateRandomWithBytesResponseFromJSONTyped(json, false);
}
function GenerateRandomWithBytesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        randomBytes: json['random_bytes'] == null ? undefined : json['random_bytes'],
    };
}
function GenerateRandomWithBytesResponseToJSON(json) {
    return GenerateRandomWithBytesResponseToJSONTyped(json, false);
}
function GenerateRandomWithBytesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        random_bytes: value['randomBytes'],
    };
}
