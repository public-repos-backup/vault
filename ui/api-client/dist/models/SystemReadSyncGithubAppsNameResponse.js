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
exports.instanceOfSystemReadSyncGithubAppsNameResponse = instanceOfSystemReadSyncGithubAppsNameResponse;
exports.SystemReadSyncGithubAppsNameResponseFromJSON = SystemReadSyncGithubAppsNameResponseFromJSON;
exports.SystemReadSyncGithubAppsNameResponseFromJSONTyped = SystemReadSyncGithubAppsNameResponseFromJSONTyped;
exports.SystemReadSyncGithubAppsNameResponseToJSON = SystemReadSyncGithubAppsNameResponseToJSON;
exports.SystemReadSyncGithubAppsNameResponseToJSONTyped = SystemReadSyncGithubAppsNameResponseToJSONTyped;
/**
 * Check if a given object implements the SystemReadSyncGithubAppsNameResponse interface.
 */
function instanceOfSystemReadSyncGithubAppsNameResponse(value) {
    return true;
}
function SystemReadSyncGithubAppsNameResponseFromJSON(json) {
    return SystemReadSyncGithubAppsNameResponseFromJSONTyped(json, false);
}
function SystemReadSyncGithubAppsNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        appId: json['app_id'] == null ? undefined : json['app_id'],
        name: json['name'] == null ? undefined : json['name'],
    };
}
function SystemReadSyncGithubAppsNameResponseToJSON(json) {
    return SystemReadSyncGithubAppsNameResponseToJSONTyped(json, false);
}
function SystemReadSyncGithubAppsNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        app_id: value['appId'],
        name: value['name'],
    };
}
