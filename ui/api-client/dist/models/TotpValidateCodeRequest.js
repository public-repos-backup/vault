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
exports.instanceOfTotpValidateCodeRequest = instanceOfTotpValidateCodeRequest;
exports.TotpValidateCodeRequestFromJSON = TotpValidateCodeRequestFromJSON;
exports.TotpValidateCodeRequestFromJSONTyped = TotpValidateCodeRequestFromJSONTyped;
exports.TotpValidateCodeRequestToJSON = TotpValidateCodeRequestToJSON;
exports.TotpValidateCodeRequestToJSONTyped = TotpValidateCodeRequestToJSONTyped;
/**
 * Check if a given object implements the TotpValidateCodeRequest interface.
 */
function instanceOfTotpValidateCodeRequest(value) {
    return true;
}
function TotpValidateCodeRequestFromJSON(json) {
    return TotpValidateCodeRequestFromJSONTyped(json, false);
}
function TotpValidateCodeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        code: json['code'] == null ? undefined : json['code'],
    };
}
function TotpValidateCodeRequestToJSON(json) {
    return TotpValidateCodeRequestToJSONTyped(json, false);
}
function TotpValidateCodeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        code: value['code'],
    };
}
