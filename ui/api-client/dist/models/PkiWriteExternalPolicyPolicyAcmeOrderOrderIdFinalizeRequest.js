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
exports.instanceOfPkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequest = instanceOfPkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequest;
exports.PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSON = PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSON;
exports.PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped = PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped;
exports.PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSON = PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSON;
exports.PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped = PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped;
/**
 * Check if a given object implements the PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequest interface.
 */
function instanceOfPkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequest(value) {
    return true;
}
function PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSON(json) {
    return PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json, false);
}
function PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        payload: json['payload'] == null ? undefined : json['payload'],
        _protected: json['protected'] == null ? undefined : json['protected'],
        signature: json['signature'] == null ? undefined : json['signature'],
    };
}
function PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSON(json) {
    return PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped(json, false);
}
function PkiWriteExternalPolicyPolicyAcmeOrderOrderIdFinalizeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        payload: value['payload'],
        protected: value['_protected'],
        signature: value['signature'],
    };
}
