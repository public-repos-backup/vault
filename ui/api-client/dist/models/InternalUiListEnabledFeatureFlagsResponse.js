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
exports.instanceOfInternalUiListEnabledFeatureFlagsResponse = instanceOfInternalUiListEnabledFeatureFlagsResponse;
exports.InternalUiListEnabledFeatureFlagsResponseFromJSON = InternalUiListEnabledFeatureFlagsResponseFromJSON;
exports.InternalUiListEnabledFeatureFlagsResponseFromJSONTyped = InternalUiListEnabledFeatureFlagsResponseFromJSONTyped;
exports.InternalUiListEnabledFeatureFlagsResponseToJSON = InternalUiListEnabledFeatureFlagsResponseToJSON;
exports.InternalUiListEnabledFeatureFlagsResponseToJSONTyped = InternalUiListEnabledFeatureFlagsResponseToJSONTyped;
/**
 * Check if a given object implements the InternalUiListEnabledFeatureFlagsResponse interface.
 */
function instanceOfInternalUiListEnabledFeatureFlagsResponse(value) {
    return true;
}
function InternalUiListEnabledFeatureFlagsResponseFromJSON(json) {
    return InternalUiListEnabledFeatureFlagsResponseFromJSONTyped(json, false);
}
function InternalUiListEnabledFeatureFlagsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        featureFlags: json['feature_flags'] == null ? undefined : json['feature_flags'],
    };
}
function InternalUiListEnabledFeatureFlagsResponseToJSON(json) {
    return InternalUiListEnabledFeatureFlagsResponseToJSONTyped(json, false);
}
function InternalUiListEnabledFeatureFlagsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        feature_flags: value['featureFlags'],
    };
}
