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
exports.instanceOfEntityBatchDeleteRequest = instanceOfEntityBatchDeleteRequest;
exports.EntityBatchDeleteRequestFromJSON = EntityBatchDeleteRequestFromJSON;
exports.EntityBatchDeleteRequestFromJSONTyped = EntityBatchDeleteRequestFromJSONTyped;
exports.EntityBatchDeleteRequestToJSON = EntityBatchDeleteRequestToJSON;
exports.EntityBatchDeleteRequestToJSONTyped = EntityBatchDeleteRequestToJSONTyped;
/**
 * Check if a given object implements the EntityBatchDeleteRequest interface.
 */
function instanceOfEntityBatchDeleteRequest(value) {
    return true;
}
function EntityBatchDeleteRequestFromJSON(json) {
    return EntityBatchDeleteRequestFromJSONTyped(json, false);
}
function EntityBatchDeleteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        entityIds: json['entity_ids'] == null ? undefined : json['entity_ids'],
    };
}
function EntityBatchDeleteRequestToJSON(json) {
    return EntityBatchDeleteRequestToJSONTyped(json, false);
}
function EntityBatchDeleteRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        entity_ids: value['entityIds'],
    };
}
