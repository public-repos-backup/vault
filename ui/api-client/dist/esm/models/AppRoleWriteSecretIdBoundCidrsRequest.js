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
 * Check if a given object implements the AppRoleWriteSecretIdBoundCidrsRequest interface.
 */
export function instanceOfAppRoleWriteSecretIdBoundCidrsRequest(value) {
    return true;
}
export function AppRoleWriteSecretIdBoundCidrsRequestFromJSON(json) {
    return AppRoleWriteSecretIdBoundCidrsRequestFromJSONTyped(json, false);
}
export function AppRoleWriteSecretIdBoundCidrsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        secretIdBoundCidrs: json['secret_id_bound_cidrs'] == null ? undefined : json['secret_id_bound_cidrs'],
    };
}
export function AppRoleWriteSecretIdBoundCidrsRequestToJSON(json) {
    return AppRoleWriteSecretIdBoundCidrsRequestToJSONTyped(json, false);
}
export function AppRoleWriteSecretIdBoundCidrsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        secret_id_bound_cidrs: value['secretIdBoundCidrs'],
    };
}
