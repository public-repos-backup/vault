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
/**
 * Check if a given object implements the SystemReadSyncGithubAppsNameResponse interface.
 */
export function instanceOfSystemReadSyncGithubAppsNameResponse(value) {
    return true;
}
export function SystemReadSyncGithubAppsNameResponseFromJSON(json) {
    return SystemReadSyncGithubAppsNameResponseFromJSONTyped(json, false);
}
export function SystemReadSyncGithubAppsNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        appId: json['app_id'] == null ? undefined : json['app_id'],
        name: json['name'] == null ? undefined : json['name'],
    };
}
export function SystemReadSyncGithubAppsNameResponseToJSON(json) {
    return SystemReadSyncGithubAppsNameResponseToJSONTyped(json, false);
}
export function SystemReadSyncGithubAppsNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        app_id: value['appId'],
        name: value['name'],
    };
}
