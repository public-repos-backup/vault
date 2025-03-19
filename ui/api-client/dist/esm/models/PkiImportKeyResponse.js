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
 * Check if a given object implements the PkiImportKeyResponse interface.
 */
export function instanceOfPkiImportKeyResponse(value) {
    return true;
}
export function PkiImportKeyResponseFromJSON(json) {
    return PkiImportKeyResponseFromJSONTyped(json, false);
}
export function PkiImportKeyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        keyId: json['key_id'] == null ? undefined : json['key_id'],
        keyName: json['key_name'] == null ? undefined : json['key_name'],
        keyType: json['key_type'] == null ? undefined : json['key_type'],
    };
}
export function PkiImportKeyResponseToJSON(json) {
    return PkiImportKeyResponseToJSONTyped(json, false);
}
export function PkiImportKeyResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        key_id: value['keyId'],
        key_name: value['keyName'],
        key_type: value['keyType'],
    };
}
