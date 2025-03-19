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
 * Check if a given object implements the JwtLoginRequest interface.
 */
export function instanceOfJwtLoginRequest(value) {
    return true;
}
export function JwtLoginRequestFromJSON(json) {
    return JwtLoginRequestFromJSONTyped(json, false);
}
export function JwtLoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        jwt: json['jwt'] == null ? undefined : json['jwt'],
        role: json['role'] == null ? undefined : json['role'],
    };
}
export function JwtLoginRequestToJSON(json) {
    return JwtLoginRequestToJSONTyped(json, false);
}
export function JwtLoginRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        jwt: value['jwt'],
        role: value['role'],
    };
}
