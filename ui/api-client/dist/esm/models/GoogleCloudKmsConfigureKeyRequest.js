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
 * Check if a given object implements the GoogleCloudKmsConfigureKeyRequest interface.
 */
export function instanceOfGoogleCloudKmsConfigureKeyRequest(value) {
    return true;
}
export function GoogleCloudKmsConfigureKeyRequestFromJSON(json) {
    return GoogleCloudKmsConfigureKeyRequestFromJSONTyped(json, false);
}
export function GoogleCloudKmsConfigureKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        maxVersion: json['max_version'] == null ? undefined : json['max_version'],
        minVersion: json['min_version'] == null ? undefined : json['min_version'],
    };
}
export function GoogleCloudKmsConfigureKeyRequestToJSON(json) {
    return GoogleCloudKmsConfigureKeyRequestToJSONTyped(json, false);
}
export function GoogleCloudKmsConfigureKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        max_version: value['maxVersion'],
        min_version: value['minVersion'],
    };
}
