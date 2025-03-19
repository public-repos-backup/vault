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
 * Check if a given object implements the AppRoleReadTokenMaxTtlResponse interface.
 */
export function instanceOfAppRoleReadTokenMaxTtlResponse(value) {
    return true;
}
export function AppRoleReadTokenMaxTtlResponseFromJSON(json) {
    return AppRoleReadTokenMaxTtlResponseFromJSONTyped(json, false);
}
export function AppRoleReadTokenMaxTtlResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        tokenMaxTtl: json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
    };
}
export function AppRoleReadTokenMaxTtlResponseToJSON(json) {
    return AppRoleReadTokenMaxTtlResponseToJSONTyped(json, false);
}
export function AppRoleReadTokenMaxTtlResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        token_max_ttl: value['tokenMaxTtl'],
    };
}
