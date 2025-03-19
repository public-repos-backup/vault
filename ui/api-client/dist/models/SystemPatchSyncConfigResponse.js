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
exports.instanceOfSystemPatchSyncConfigResponse = instanceOfSystemPatchSyncConfigResponse;
exports.SystemPatchSyncConfigResponseFromJSON = SystemPatchSyncConfigResponseFromJSON;
exports.SystemPatchSyncConfigResponseFromJSONTyped = SystemPatchSyncConfigResponseFromJSONTyped;
exports.SystemPatchSyncConfigResponseToJSON = SystemPatchSyncConfigResponseToJSON;
exports.SystemPatchSyncConfigResponseToJSONTyped = SystemPatchSyncConfigResponseToJSONTyped;
/**
 * Check if a given object implements the SystemPatchSyncConfigResponse interface.
 */
function instanceOfSystemPatchSyncConfigResponse(value) {
    return true;
}
function SystemPatchSyncConfigResponseFromJSON(json) {
    return SystemPatchSyncConfigResponseFromJSONTyped(json, false);
}
function SystemPatchSyncConfigResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        disabled: json['disabled'] == null ? undefined : json['disabled'],
        queueCapacity: json['queue_capacity'] == null ? undefined : json['queue_capacity'],
    };
}
function SystemPatchSyncConfigResponseToJSON(json) {
    return SystemPatchSyncConfigResponseToJSONTyped(json, false);
}
function SystemPatchSyncConfigResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        disabled: value['disabled'],
        queue_capacity: value['queueCapacity'],
    };
}
