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
 * Check if a given object implements the PluginsRuntimesCatalogListPluginsRuntimesResponse interface.
 */
export function instanceOfPluginsRuntimesCatalogListPluginsRuntimesResponse(value) {
    return true;
}
export function PluginsRuntimesCatalogListPluginsRuntimesResponseFromJSON(json) {
    return PluginsRuntimesCatalogListPluginsRuntimesResponseFromJSONTyped(json, false);
}
export function PluginsRuntimesCatalogListPluginsRuntimesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        runtimes: json['runtimes'] == null ? undefined : json['runtimes'],
    };
}
export function PluginsRuntimesCatalogListPluginsRuntimesResponseToJSON(json) {
    return PluginsRuntimesCatalogListPluginsRuntimesResponseToJSONTyped(json, false);
}
export function PluginsRuntimesCatalogListPluginsRuntimesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        runtimes: value['runtimes'],
    };
}
