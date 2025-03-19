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
exports.instanceOfPkiListEabKeysResponse = instanceOfPkiListEabKeysResponse;
exports.PkiListEabKeysResponseFromJSON = PkiListEabKeysResponseFromJSON;
exports.PkiListEabKeysResponseFromJSONTyped = PkiListEabKeysResponseFromJSONTyped;
exports.PkiListEabKeysResponseToJSON = PkiListEabKeysResponseToJSON;
exports.PkiListEabKeysResponseToJSONTyped = PkiListEabKeysResponseToJSONTyped;
/**
 * Check if a given object implements the PkiListEabKeysResponse interface.
 */
function instanceOfPkiListEabKeysResponse(value) {
    return true;
}
function PkiListEabKeysResponseFromJSON(json) {
    return PkiListEabKeysResponseFromJSONTyped(json, false);
}
function PkiListEabKeysResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        keyInfo: json['key_info'] == null ? undefined : json['key_info'],
        keys: json['keys'] == null ? undefined : json['keys'],
    };
}
function PkiListEabKeysResponseToJSON(json) {
    return PkiListEabKeysResponseToJSONTyped(json, false);
}
function PkiListEabKeysResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        key_info: value['keyInfo'],
        keys: value['keys'],
    };
}
