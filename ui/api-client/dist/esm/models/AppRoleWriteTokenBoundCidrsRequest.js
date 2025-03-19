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
/**
 * Check if a given object implements the AppRoleWriteTokenBoundCidrsRequest interface.
 */
export function instanceOfAppRoleWriteTokenBoundCidrsRequest(value) {
    return true;
}
export function AppRoleWriteTokenBoundCidrsRequestFromJSON(json) {
    return AppRoleWriteTokenBoundCidrsRequestFromJSONTyped(json, false);
}
export function AppRoleWriteTokenBoundCidrsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        tokenBoundCidrs: json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
    };
}
export function AppRoleWriteTokenBoundCidrsRequestToJSON(json) {
    return AppRoleWriteTokenBoundCidrsRequestToJSONTyped(json, false);
}
export function AppRoleWriteTokenBoundCidrsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        token_bound_cidrs: value['tokenBoundCidrs'],
    };
}
