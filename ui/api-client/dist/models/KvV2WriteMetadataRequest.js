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
exports.instanceOfKvV2WriteMetadataRequest = instanceOfKvV2WriteMetadataRequest;
exports.KvV2WriteMetadataRequestFromJSON = KvV2WriteMetadataRequestFromJSON;
exports.KvV2WriteMetadataRequestFromJSONTyped = KvV2WriteMetadataRequestFromJSONTyped;
exports.KvV2WriteMetadataRequestToJSON = KvV2WriteMetadataRequestToJSON;
exports.KvV2WriteMetadataRequestToJSONTyped = KvV2WriteMetadataRequestToJSONTyped;
/**
 * Check if a given object implements the KvV2WriteMetadataRequest interface.
 */
function instanceOfKvV2WriteMetadataRequest(value) {
    return true;
}
function KvV2WriteMetadataRequestFromJSON(json) {
    return KvV2WriteMetadataRequestFromJSONTyped(json, false);
}
function KvV2WriteMetadataRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        casRequired: json['cas_required'] == null ? undefined : json['cas_required'],
        customMetadata: json['custom_metadata'] == null ? undefined : json['custom_metadata'],
        deleteVersionAfter: json['delete_version_after'] == null ? undefined : json['delete_version_after'],
        maxVersions: json['max_versions'] == null ? undefined : json['max_versions'],
    };
}
function KvV2WriteMetadataRequestToJSON(json) {
    return KvV2WriteMetadataRequestToJSONTyped(json, false);
}
function KvV2WriteMetadataRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        cas_required: value['casRequired'],
        custom_metadata: value['customMetadata'],
        delete_version_after: value['deleteVersionAfter'],
        max_versions: value['maxVersions'],
    };
}
