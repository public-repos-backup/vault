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
 * Check if a given object implements the KvV2ReadResponse interface.
 */
export function instanceOfKvV2ReadResponse(value) {
    return true;
}
export function KvV2ReadResponseFromJSON(json) {
    return KvV2ReadResponseFromJSONTyped(json, false);
}
export function KvV2ReadResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        data: json['data'] == null ? undefined : json['data'],
        metadata: json['metadata'] == null ? undefined : json['metadata'],
    };
}
export function KvV2ReadResponseToJSON(json) {
    return KvV2ReadResponseToJSONTyped(json, false);
}
export function KvV2ReadResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        data: value['data'],
        metadata: value['metadata'],
    };
}
