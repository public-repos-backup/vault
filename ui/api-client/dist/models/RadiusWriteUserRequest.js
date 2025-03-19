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
exports.instanceOfRadiusWriteUserRequest = instanceOfRadiusWriteUserRequest;
exports.RadiusWriteUserRequestFromJSON = RadiusWriteUserRequestFromJSON;
exports.RadiusWriteUserRequestFromJSONTyped = RadiusWriteUserRequestFromJSONTyped;
exports.RadiusWriteUserRequestToJSON = RadiusWriteUserRequestToJSON;
exports.RadiusWriteUserRequestToJSONTyped = RadiusWriteUserRequestToJSONTyped;
/**
 * Check if a given object implements the RadiusWriteUserRequest interface.
 */
function instanceOfRadiusWriteUserRequest(value) {
    return true;
}
function RadiusWriteUserRequestFromJSON(json) {
    return RadiusWriteUserRequestFromJSONTyped(json, false);
}
function RadiusWriteUserRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        policies: json['policies'] == null ? undefined : json['policies'],
    };
}
function RadiusWriteUserRequestToJSON(json) {
    return RadiusWriteUserRequestToJSONTyped(json, false);
}
function RadiusWriteUserRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        policies: value['policies'],
    };
}
