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
exports.instanceOfAppRoleWriteCustomSecretIdRequest = instanceOfAppRoleWriteCustomSecretIdRequest;
exports.AppRoleWriteCustomSecretIdRequestFromJSON = AppRoleWriteCustomSecretIdRequestFromJSON;
exports.AppRoleWriteCustomSecretIdRequestFromJSONTyped = AppRoleWriteCustomSecretIdRequestFromJSONTyped;
exports.AppRoleWriteCustomSecretIdRequestToJSON = AppRoleWriteCustomSecretIdRequestToJSON;
exports.AppRoleWriteCustomSecretIdRequestToJSONTyped = AppRoleWriteCustomSecretIdRequestToJSONTyped;
/**
 * Check if a given object implements the AppRoleWriteCustomSecretIdRequest interface.
 */
function instanceOfAppRoleWriteCustomSecretIdRequest(value) {
    return true;
}
function AppRoleWriteCustomSecretIdRequestFromJSON(json) {
    return AppRoleWriteCustomSecretIdRequestFromJSONTyped(json, false);
}
function AppRoleWriteCustomSecretIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        cidrList: json['cidr_list'] == null ? undefined : json['cidr_list'],
        metadata: json['metadata'] == null ? undefined : json['metadata'],
        numUses: json['num_uses'] == null ? undefined : json['num_uses'],
        secretId: json['secret_id'] == null ? undefined : json['secret_id'],
        tokenBoundCidrs: json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        ttl: json['ttl'] == null ? undefined : json['ttl'],
    };
}
function AppRoleWriteCustomSecretIdRequestToJSON(json) {
    return AppRoleWriteCustomSecretIdRequestToJSONTyped(json, false);
}
function AppRoleWriteCustomSecretIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        cidr_list: value['cidrList'],
        metadata: value['metadata'],
        num_uses: value['numUses'],
        secret_id: value['secretId'],
        token_bound_cidrs: value['tokenBoundCidrs'],
        ttl: value['ttl'],
    };
}
