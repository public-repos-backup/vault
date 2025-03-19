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
exports.instanceOfInternalCountEntitiesResponse = instanceOfInternalCountEntitiesResponse;
exports.InternalCountEntitiesResponseFromJSON = InternalCountEntitiesResponseFromJSON;
exports.InternalCountEntitiesResponseFromJSONTyped = InternalCountEntitiesResponseFromJSONTyped;
exports.InternalCountEntitiesResponseToJSON = InternalCountEntitiesResponseToJSON;
exports.InternalCountEntitiesResponseToJSONTyped = InternalCountEntitiesResponseToJSONTyped;
/**
 * Check if a given object implements the InternalCountEntitiesResponse interface.
 */
function instanceOfInternalCountEntitiesResponse(value) {
    return true;
}
function InternalCountEntitiesResponseFromJSON(json) {
    return InternalCountEntitiesResponseFromJSONTyped(json, false);
}
function InternalCountEntitiesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        counters: json['counters'] == null ? undefined : json['counters'],
    };
}
function InternalCountEntitiesResponseToJSON(json) {
    return InternalCountEntitiesResponseToJSONTyped(json, false);
}
function InternalCountEntitiesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        counters: value['counters'],
    };
}
