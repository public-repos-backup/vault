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
exports.instanceOfTokenLookUpSelf2Request = instanceOfTokenLookUpSelf2Request;
exports.TokenLookUpSelf2RequestFromJSON = TokenLookUpSelf2RequestFromJSON;
exports.TokenLookUpSelf2RequestFromJSONTyped = TokenLookUpSelf2RequestFromJSONTyped;
exports.TokenLookUpSelf2RequestToJSON = TokenLookUpSelf2RequestToJSON;
exports.TokenLookUpSelf2RequestToJSONTyped = TokenLookUpSelf2RequestToJSONTyped;
/**
 * Check if a given object implements the TokenLookUpSelf2Request interface.
 */
function instanceOfTokenLookUpSelf2Request(value) {
    return true;
}
function TokenLookUpSelf2RequestFromJSON(json) {
    return TokenLookUpSelf2RequestFromJSONTyped(json, false);
}
function TokenLookUpSelf2RequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        token: json['token'] == null ? undefined : json['token'],
    };
}
function TokenLookUpSelf2RequestToJSON(json) {
    return TokenLookUpSelf2RequestToJSONTyped(json, false);
}
function TokenLookUpSelf2RequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        token: value['token'],
    };
}
