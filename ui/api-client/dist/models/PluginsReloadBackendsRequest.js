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
exports.instanceOfPluginsReloadBackendsRequest = instanceOfPluginsReloadBackendsRequest;
exports.PluginsReloadBackendsRequestFromJSON = PluginsReloadBackendsRequestFromJSON;
exports.PluginsReloadBackendsRequestFromJSONTyped = PluginsReloadBackendsRequestFromJSONTyped;
exports.PluginsReloadBackendsRequestToJSON = PluginsReloadBackendsRequestToJSON;
exports.PluginsReloadBackendsRequestToJSONTyped = PluginsReloadBackendsRequestToJSONTyped;
/**
 * Check if a given object implements the PluginsReloadBackendsRequest interface.
 */
function instanceOfPluginsReloadBackendsRequest(value) {
    return true;
}
function PluginsReloadBackendsRequestFromJSON(json) {
    return PluginsReloadBackendsRequestFromJSONTyped(json, false);
}
function PluginsReloadBackendsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        mounts: json['mounts'] == null ? undefined : json['mounts'],
        plugin: json['plugin'] == null ? undefined : json['plugin'],
        scope: json['scope'] == null ? undefined : json['scope'],
    };
}
function PluginsReloadBackendsRequestToJSON(json) {
    return PluginsReloadBackendsRequestToJSONTyped(json, false);
}
function PluginsReloadBackendsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        mounts: value['mounts'],
        plugin: value['plugin'],
        scope: value['scope'],
    };
}
