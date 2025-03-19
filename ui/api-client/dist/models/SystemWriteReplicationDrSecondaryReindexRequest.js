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
exports.instanceOfSystemWriteReplicationDrSecondaryReindexRequest = instanceOfSystemWriteReplicationDrSecondaryReindexRequest;
exports.SystemWriteReplicationDrSecondaryReindexRequestFromJSON = SystemWriteReplicationDrSecondaryReindexRequestFromJSON;
exports.SystemWriteReplicationDrSecondaryReindexRequestFromJSONTyped = SystemWriteReplicationDrSecondaryReindexRequestFromJSONTyped;
exports.SystemWriteReplicationDrSecondaryReindexRequestToJSON = SystemWriteReplicationDrSecondaryReindexRequestToJSON;
exports.SystemWriteReplicationDrSecondaryReindexRequestToJSONTyped = SystemWriteReplicationDrSecondaryReindexRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteReplicationDrSecondaryReindexRequest interface.
 */
function instanceOfSystemWriteReplicationDrSecondaryReindexRequest(value) {
    return true;
}
function SystemWriteReplicationDrSecondaryReindexRequestFromJSON(json) {
    return SystemWriteReplicationDrSecondaryReindexRequestFromJSONTyped(json, false);
}
function SystemWriteReplicationDrSecondaryReindexRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        diff: json['diff'] == null ? undefined : json['diff'],
        drOperationToken: json['dr_operation_token'] == null ? undefined : json['dr_operation_token'],
        force: json['force'] == null ? undefined : json['force'],
        skipFlush: json['skip_flush'] == null ? undefined : json['skip_flush'],
    };
}
function SystemWriteReplicationDrSecondaryReindexRequestToJSON(json) {
    return SystemWriteReplicationDrSecondaryReindexRequestToJSONTyped(json, false);
}
function SystemWriteReplicationDrSecondaryReindexRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        diff: value['diff'],
        dr_operation_token: value['drOperationToken'],
        force: value['force'],
        skip_flush: value['skipFlush'],
    };
}
