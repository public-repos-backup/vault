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
exports.instanceOfSystemWriteNamespacesPathRequest = instanceOfSystemWriteNamespacesPathRequest;
exports.SystemWriteNamespacesPathRequestFromJSON = SystemWriteNamespacesPathRequestFromJSON;
exports.SystemWriteNamespacesPathRequestFromJSONTyped = SystemWriteNamespacesPathRequestFromJSONTyped;
exports.SystemWriteNamespacesPathRequestToJSON = SystemWriteNamespacesPathRequestToJSON;
exports.SystemWriteNamespacesPathRequestToJSONTyped = SystemWriteNamespacesPathRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteNamespacesPathRequest interface.
 */
function instanceOfSystemWriteNamespacesPathRequest(value) {
    return true;
}
function SystemWriteNamespacesPathRequestFromJSON(json) {
    return SystemWriteNamespacesPathRequestFromJSONTyped(json, false);
}
function SystemWriteNamespacesPathRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        customMetadata: json['custom_metadata'] == null ? undefined : json['custom_metadata'],
    };
}
function SystemWriteNamespacesPathRequestToJSON(json) {
    return SystemWriteNamespacesPathRequestToJSONTyped(json, false);
}
function SystemWriteNamespacesPathRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        custom_metadata: value['customMetadata'],
    };
}
