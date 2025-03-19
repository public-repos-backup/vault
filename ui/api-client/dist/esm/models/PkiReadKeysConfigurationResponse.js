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
 * Check if a given object implements the PkiReadKeysConfigurationResponse interface.
 */
export function instanceOfPkiReadKeysConfigurationResponse(value) {
    return true;
}
export function PkiReadKeysConfigurationResponseFromJSON(json) {
    return PkiReadKeysConfigurationResponseFromJSONTyped(json, false);
}
export function PkiReadKeysConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        _default: json['default'] == null ? undefined : json['default'],
    };
}
export function PkiReadKeysConfigurationResponseToJSON(json) {
    return PkiReadKeysConfigurationResponseToJSONTyped(json, false);
}
export function PkiReadKeysConfigurationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        default: value['_default'],
    };
}
