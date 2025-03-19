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
exports.instanceOfPluginsCatalogListPluginsWithTypeResponse = instanceOfPluginsCatalogListPluginsWithTypeResponse;
exports.PluginsCatalogListPluginsWithTypeResponseFromJSON = PluginsCatalogListPluginsWithTypeResponseFromJSON;
exports.PluginsCatalogListPluginsWithTypeResponseFromJSONTyped = PluginsCatalogListPluginsWithTypeResponseFromJSONTyped;
exports.PluginsCatalogListPluginsWithTypeResponseToJSON = PluginsCatalogListPluginsWithTypeResponseToJSON;
exports.PluginsCatalogListPluginsWithTypeResponseToJSONTyped = PluginsCatalogListPluginsWithTypeResponseToJSONTyped;
/**
 * Check if a given object implements the PluginsCatalogListPluginsWithTypeResponse interface.
 */
function instanceOfPluginsCatalogListPluginsWithTypeResponse(value) {
    return true;
}
function PluginsCatalogListPluginsWithTypeResponseFromJSON(json) {
    return PluginsCatalogListPluginsWithTypeResponseFromJSONTyped(json, false);
}
function PluginsCatalogListPluginsWithTypeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        keys: json['keys'] == null ? undefined : json['keys'],
    };
}
function PluginsCatalogListPluginsWithTypeResponseToJSON(json) {
    return PluginsCatalogListPluginsWithTypeResponseToJSONTyped(json, false);
}
function PluginsCatalogListPluginsWithTypeResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        keys: value['keys'],
    };
}
