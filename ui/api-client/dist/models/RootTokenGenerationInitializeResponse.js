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
exports.instanceOfRootTokenGenerationInitializeResponse = instanceOfRootTokenGenerationInitializeResponse;
exports.RootTokenGenerationInitializeResponseFromJSON = RootTokenGenerationInitializeResponseFromJSON;
exports.RootTokenGenerationInitializeResponseFromJSONTyped = RootTokenGenerationInitializeResponseFromJSONTyped;
exports.RootTokenGenerationInitializeResponseToJSON = RootTokenGenerationInitializeResponseToJSON;
exports.RootTokenGenerationInitializeResponseToJSONTyped = RootTokenGenerationInitializeResponseToJSONTyped;
/**
 * Check if a given object implements the RootTokenGenerationInitializeResponse interface.
 */
function instanceOfRootTokenGenerationInitializeResponse(value) {
    return true;
}
function RootTokenGenerationInitializeResponseFromJSON(json) {
    return RootTokenGenerationInitializeResponseFromJSONTyped(json, false);
}
function RootTokenGenerationInitializeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        complete: json['complete'] == null ? undefined : json['complete'],
        encodedRootToken: json['encoded_root_token'] == null ? undefined : json['encoded_root_token'],
        encodedToken: json['encoded_token'] == null ? undefined : json['encoded_token'],
        nonce: json['nonce'] == null ? undefined : json['nonce'],
        otp: json['otp'] == null ? undefined : json['otp'],
        otpLength: json['otp_length'] == null ? undefined : json['otp_length'],
        pgpFingerprint: json['pgp_fingerprint'] == null ? undefined : json['pgp_fingerprint'],
        progress: json['progress'] == null ? undefined : json['progress'],
        required: json['required'] == null ? undefined : json['required'],
        started: json['started'] == null ? undefined : json['started'],
    };
}
function RootTokenGenerationInitializeResponseToJSON(json) {
    return RootTokenGenerationInitializeResponseToJSONTyped(json, false);
}
function RootTokenGenerationInitializeResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        complete: value['complete'],
        encoded_root_token: value['encodedRootToken'],
        encoded_token: value['encodedToken'],
        nonce: value['nonce'],
        otp: value['otp'],
        otp_length: value['otpLength'],
        pgp_fingerprint: value['pgpFingerprint'],
        progress: value['progress'],
        required: value['required'],
        started: value['started'],
    };
}
