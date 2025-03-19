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
exports.instanceOfAppRoleWriteSecretIdRequest = instanceOfAppRoleWriteSecretIdRequest;
exports.AppRoleWriteSecretIdRequestFromJSON = AppRoleWriteSecretIdRequestFromJSON;
exports.AppRoleWriteSecretIdRequestFromJSONTyped = AppRoleWriteSecretIdRequestFromJSONTyped;
exports.AppRoleWriteSecretIdRequestToJSON = AppRoleWriteSecretIdRequestToJSON;
exports.AppRoleWriteSecretIdRequestToJSONTyped = AppRoleWriteSecretIdRequestToJSONTyped;
/**
 * Check if a given object implements the AppRoleWriteSecretIdRequest interface.
 */
function instanceOfAppRoleWriteSecretIdRequest(value) {
    return true;
}
function AppRoleWriteSecretIdRequestFromJSON(json) {
    return AppRoleWriteSecretIdRequestFromJSONTyped(json, false);
}
function AppRoleWriteSecretIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        cidrList: json['cidr_list'] == null ? undefined : json['cidr_list'],
        metadata: json['metadata'] == null ? undefined : json['metadata'],
        numUses: json['num_uses'] == null ? undefined : json['num_uses'],
        tokenBoundCidrs: json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        ttl: json['ttl'] == null ? undefined : json['ttl'],
    };
}
function AppRoleWriteSecretIdRequestToJSON(json) {
    return AppRoleWriteSecretIdRequestToJSONTyped(json, false);
}
function AppRoleWriteSecretIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        cidr_list: value['cidrList'],
        metadata: value['metadata'],
        num_uses: value['numUses'],
        token_bound_cidrs: value['tokenBoundCidrs'],
        ttl: value['ttl'],
    };
}
