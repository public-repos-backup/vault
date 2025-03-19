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
exports.instanceOfAppRoleWriteSecretIdNumUsesRequest = instanceOfAppRoleWriteSecretIdNumUsesRequest;
exports.AppRoleWriteSecretIdNumUsesRequestFromJSON = AppRoleWriteSecretIdNumUsesRequestFromJSON;
exports.AppRoleWriteSecretIdNumUsesRequestFromJSONTyped = AppRoleWriteSecretIdNumUsesRequestFromJSONTyped;
exports.AppRoleWriteSecretIdNumUsesRequestToJSON = AppRoleWriteSecretIdNumUsesRequestToJSON;
exports.AppRoleWriteSecretIdNumUsesRequestToJSONTyped = AppRoleWriteSecretIdNumUsesRequestToJSONTyped;
/**
 * Check if a given object implements the AppRoleWriteSecretIdNumUsesRequest interface.
 */
function instanceOfAppRoleWriteSecretIdNumUsesRequest(value) {
    return true;
}
function AppRoleWriteSecretIdNumUsesRequestFromJSON(json) {
    return AppRoleWriteSecretIdNumUsesRequestFromJSONTyped(json, false);
}
function AppRoleWriteSecretIdNumUsesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        secretIdNumUses: json['secret_id_num_uses'] == null ? undefined : json['secret_id_num_uses'],
    };
}
function AppRoleWriteSecretIdNumUsesRequestToJSON(json) {
    return AppRoleWriteSecretIdNumUsesRequestToJSONTyped(json, false);
}
function AppRoleWriteSecretIdNumUsesRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        secret_id_num_uses: value['secretIdNumUses'],
    };
}
