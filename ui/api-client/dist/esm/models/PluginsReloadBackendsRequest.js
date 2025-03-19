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
 * Check if a given object implements the PluginsReloadBackendsRequest interface.
 */
export function instanceOfPluginsReloadBackendsRequest(value) {
    return true;
}
export function PluginsReloadBackendsRequestFromJSON(json) {
    return PluginsReloadBackendsRequestFromJSONTyped(json, false);
}
export function PluginsReloadBackendsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        mounts: json['mounts'] == null ? undefined : json['mounts'],
        plugin: json['plugin'] == null ? undefined : json['plugin'],
        scope: json['scope'] == null ? undefined : json['scope'],
    };
}
export function PluginsReloadBackendsRequestToJSON(json) {
    return PluginsReloadBackendsRequestToJSONTyped(json, false);
}
export function PluginsReloadBackendsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        mounts: value['mounts'],
        plugin: value['plugin'],
        scope: value['scope'],
    };
}
