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
exports.instanceOfUiConfigDeleteCustomMessageResponse = instanceOfUiConfigDeleteCustomMessageResponse;
exports.UiConfigDeleteCustomMessageResponseFromJSON = UiConfigDeleteCustomMessageResponseFromJSON;
exports.UiConfigDeleteCustomMessageResponseFromJSONTyped = UiConfigDeleteCustomMessageResponseFromJSONTyped;
exports.UiConfigDeleteCustomMessageResponseToJSON = UiConfigDeleteCustomMessageResponseToJSON;
exports.UiConfigDeleteCustomMessageResponseToJSONTyped = UiConfigDeleteCustomMessageResponseToJSONTyped;
/**
 * Check if a given object implements the UiConfigDeleteCustomMessageResponse interface.
 */
function instanceOfUiConfigDeleteCustomMessageResponse(value) {
    return true;
}
function UiConfigDeleteCustomMessageResponseFromJSON(json) {
    return UiConfigDeleteCustomMessageResponseFromJSONTyped(json, false);
}
function UiConfigDeleteCustomMessageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        id: json['id'] == null ? undefined : json['id'],
    };
}
function UiConfigDeleteCustomMessageResponseToJSON(json) {
    return UiConfigDeleteCustomMessageResponseToJSONTyped(json, false);
}
function UiConfigDeleteCustomMessageResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        id: value['id'],
    };
}
