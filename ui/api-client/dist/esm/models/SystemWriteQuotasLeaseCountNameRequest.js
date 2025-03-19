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
 * Check if a given object implements the SystemWriteQuotasLeaseCountNameRequest interface.
 */
export function instanceOfSystemWriteQuotasLeaseCountNameRequest(value) {
    return true;
}
export function SystemWriteQuotasLeaseCountNameRequestFromJSON(json) {
    return SystemWriteQuotasLeaseCountNameRequestFromJSONTyped(json, false);
}
export function SystemWriteQuotasLeaseCountNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        inheritable: json['inheritable'] == null ? undefined : json['inheritable'],
        maxLeases: json['max_leases'] == null ? undefined : json['max_leases'],
        path: json['path'] == null ? undefined : json['path'],
        role: json['role'] == null ? undefined : json['role'],
        type: json['type'] == null ? undefined : json['type'],
    };
}
export function SystemWriteQuotasLeaseCountNameRequestToJSON(json) {
    return SystemWriteQuotasLeaseCountNameRequestToJSONTyped(json, false);
}
export function SystemWriteQuotasLeaseCountNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        inheritable: value['inheritable'],
        max_leases: value['maxLeases'],
        path: value['path'],
        role: value['role'],
        type: value['type'],
    };
}
