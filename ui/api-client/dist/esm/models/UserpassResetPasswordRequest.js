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
 * Check if a given object implements the UserpassResetPasswordRequest interface.
 */
export function instanceOfUserpassResetPasswordRequest(value) {
    return true;
}
export function UserpassResetPasswordRequestFromJSON(json) {
    return UserpassResetPasswordRequestFromJSONTyped(json, false);
}
export function UserpassResetPasswordRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        password: json['password'] == null ? undefined : json['password'],
        passwordHash: json['password_hash'] == null ? undefined : json['password_hash'],
    };
}
export function UserpassResetPasswordRequestToJSON(json) {
    return UserpassResetPasswordRequestToJSONTyped(json, false);
}
export function UserpassResetPasswordRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        password: value['password'],
        password_hash: value['passwordHash'],
    };
}
