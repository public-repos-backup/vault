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
exports.instanceOfSshConfigureCaRequest = instanceOfSshConfigureCaRequest;
exports.SshConfigureCaRequestFromJSON = SshConfigureCaRequestFromJSON;
exports.SshConfigureCaRequestFromJSONTyped = SshConfigureCaRequestFromJSONTyped;
exports.SshConfigureCaRequestToJSON = SshConfigureCaRequestToJSON;
exports.SshConfigureCaRequestToJSONTyped = SshConfigureCaRequestToJSONTyped;
/**
 * Check if a given object implements the SshConfigureCaRequest interface.
 */
function instanceOfSshConfigureCaRequest(value) {
    return true;
}
function SshConfigureCaRequestFromJSON(json) {
    return SshConfigureCaRequestFromJSONTyped(json, false);
}
function SshConfigureCaRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        generateSigningKey: json['generate_signing_key'] == null ? undefined : json['generate_signing_key'],
        keyBits: json['key_bits'] == null ? undefined : json['key_bits'],
        keyType: json['key_type'] == null ? undefined : json['key_type'],
        privateKey: json['private_key'] == null ? undefined : json['private_key'],
        publicKey: json['public_key'] == null ? undefined : json['public_key'],
    };
}
function SshConfigureCaRequestToJSON(json) {
    return SshConfigureCaRequestToJSONTyped(json, false);
}
function SshConfigureCaRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        generate_signing_key: value['generateSigningKey'],
        key_bits: value['keyBits'],
        key_type: value['keyType'],
        private_key: value['privateKey'],
        public_key: value['publicKey'],
    };
}
