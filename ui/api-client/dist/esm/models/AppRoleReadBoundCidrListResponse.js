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
 * Check if a given object implements the AppRoleReadBoundCidrListResponse interface.
 */
export function instanceOfAppRoleReadBoundCidrListResponse(value) {
    return true;
}
export function AppRoleReadBoundCidrListResponseFromJSON(json) {
    return AppRoleReadBoundCidrListResponseFromJSONTyped(json, false);
}
export function AppRoleReadBoundCidrListResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        boundCidrList: json['bound_cidr_list'] == null ? undefined : json['bound_cidr_list'],
    };
}
export function AppRoleReadBoundCidrListResponseToJSON(json) {
    return AppRoleReadBoundCidrListResponseToJSONTyped(json, false);
}
export function AppRoleReadBoundCidrListResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        bound_cidr_list: value['boundCidrList'],
    };
}
