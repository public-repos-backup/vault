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
exports.instanceOfSshListRolesByIpRequest = instanceOfSshListRolesByIpRequest;
exports.SshListRolesByIpRequestFromJSON = SshListRolesByIpRequestFromJSON;
exports.SshListRolesByIpRequestFromJSONTyped = SshListRolesByIpRequestFromJSONTyped;
exports.SshListRolesByIpRequestToJSON = SshListRolesByIpRequestToJSON;
exports.SshListRolesByIpRequestToJSONTyped = SshListRolesByIpRequestToJSONTyped;
/**
 * Check if a given object implements the SshListRolesByIpRequest interface.
 */
function instanceOfSshListRolesByIpRequest(value) {
    return true;
}
function SshListRolesByIpRequestFromJSON(json) {
    return SshListRolesByIpRequestFromJSONTyped(json, false);
}
function SshListRolesByIpRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        ip: json['ip'] == null ? undefined : json['ip'],
    };
}
function SshListRolesByIpRequestToJSON(json) {
    return SshListRolesByIpRequestToJSONTyped(json, false);
}
function SshListRolesByIpRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        ip: value['ip'],
    };
}
