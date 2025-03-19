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
exports.instanceOfPkiWriteAcmeAuthorizationAuthIdRequest = instanceOfPkiWriteAcmeAuthorizationAuthIdRequest;
exports.PkiWriteAcmeAuthorizationAuthIdRequestFromJSON = PkiWriteAcmeAuthorizationAuthIdRequestFromJSON;
exports.PkiWriteAcmeAuthorizationAuthIdRequestFromJSONTyped = PkiWriteAcmeAuthorizationAuthIdRequestFromJSONTyped;
exports.PkiWriteAcmeAuthorizationAuthIdRequestToJSON = PkiWriteAcmeAuthorizationAuthIdRequestToJSON;
exports.PkiWriteAcmeAuthorizationAuthIdRequestToJSONTyped = PkiWriteAcmeAuthorizationAuthIdRequestToJSONTyped;
/**
 * Check if a given object implements the PkiWriteAcmeAuthorizationAuthIdRequest interface.
 */
function instanceOfPkiWriteAcmeAuthorizationAuthIdRequest(value) {
    return true;
}
function PkiWriteAcmeAuthorizationAuthIdRequestFromJSON(json) {
    return PkiWriteAcmeAuthorizationAuthIdRequestFromJSONTyped(json, false);
}
function PkiWriteAcmeAuthorizationAuthIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        payload: json['payload'] == null ? undefined : json['payload'],
        _protected: json['protected'] == null ? undefined : json['protected'],
        signature: json['signature'] == null ? undefined : json['signature'],
    };
}
function PkiWriteAcmeAuthorizationAuthIdRequestToJSON(json) {
    return PkiWriteAcmeAuthorizationAuthIdRequestToJSONTyped(json, false);
}
function PkiWriteAcmeAuthorizationAuthIdRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        payload: value['payload'],
        protected: value['_protected'],
        signature: value['signature'],
    };
}
