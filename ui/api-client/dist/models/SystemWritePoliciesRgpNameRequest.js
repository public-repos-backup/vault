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
exports.instanceOfSystemWritePoliciesRgpNameRequest = instanceOfSystemWritePoliciesRgpNameRequest;
exports.SystemWritePoliciesRgpNameRequestFromJSON = SystemWritePoliciesRgpNameRequestFromJSON;
exports.SystemWritePoliciesRgpNameRequestFromJSONTyped = SystemWritePoliciesRgpNameRequestFromJSONTyped;
exports.SystemWritePoliciesRgpNameRequestToJSON = SystemWritePoliciesRgpNameRequestToJSON;
exports.SystemWritePoliciesRgpNameRequestToJSONTyped = SystemWritePoliciesRgpNameRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWritePoliciesRgpNameRequest interface.
 */
function instanceOfSystemWritePoliciesRgpNameRequest(value) {
    return true;
}
function SystemWritePoliciesRgpNameRequestFromJSON(json) {
    return SystemWritePoliciesRgpNameRequestFromJSONTyped(json, false);
}
function SystemWritePoliciesRgpNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        enforcementLevel: json['enforcement_level'] == null ? undefined : json['enforcement_level'],
        policy: json['policy'] == null ? undefined : json['policy'],
    };
}
function SystemWritePoliciesRgpNameRequestToJSON(json) {
    return SystemWritePoliciesRgpNameRequestToJSONTyped(json, false);
}
function SystemWritePoliciesRgpNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        enforcement_level: value['enforcementLevel'],
        policy: value['policy'],
    };
}
