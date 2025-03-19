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
exports.instanceOfOidcRotateKeyRequest = instanceOfOidcRotateKeyRequest;
exports.OidcRotateKeyRequestFromJSON = OidcRotateKeyRequestFromJSON;
exports.OidcRotateKeyRequestFromJSONTyped = OidcRotateKeyRequestFromJSONTyped;
exports.OidcRotateKeyRequestToJSON = OidcRotateKeyRequestToJSON;
exports.OidcRotateKeyRequestToJSONTyped = OidcRotateKeyRequestToJSONTyped;
/**
 * Check if a given object implements the OidcRotateKeyRequest interface.
 */
function instanceOfOidcRotateKeyRequest(value) {
    return true;
}
function OidcRotateKeyRequestFromJSON(json) {
    return OidcRotateKeyRequestFromJSONTyped(json, false);
}
function OidcRotateKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        verificationTtl: json['verification_ttl'] == null ? undefined : json['verification_ttl'],
    };
}
function OidcRotateKeyRequestToJSON(json) {
    return OidcRotateKeyRequestToJSONTyped(json, false);
}
function OidcRotateKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        verification_ttl: value['verificationTtl'],
    };
}
