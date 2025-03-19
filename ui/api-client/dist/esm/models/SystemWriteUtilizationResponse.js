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
 * Check if a given object implements the SystemWriteUtilizationResponse interface.
 */
export function instanceOfSystemWriteUtilizationResponse(value) {
    return true;
}
export function SystemWriteUtilizationResponseFromJSON(json) {
    return SystemWriteUtilizationResponseFromJSONTyped(json, false);
}
export function SystemWriteUtilizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        utilizationBundle: json['utilization_bundle'] == null ? undefined : json['utilization_bundle'],
    };
}
export function SystemWriteUtilizationResponseToJSON(json) {
    return SystemWriteUtilizationResponseToJSONTyped(json, false);
}
export function SystemWriteUtilizationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        utilization_bundle: value['utilizationBundle'],
    };
}
