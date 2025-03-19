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
 * Check if a given object implements the SystemWriteReplicationDrSecondaryOperationTokenDeleteRequest interface.
 */
export function instanceOfSystemWriteReplicationDrSecondaryOperationTokenDeleteRequest(value) {
    return true;
}
export function SystemWriteReplicationDrSecondaryOperationTokenDeleteRequestFromJSON(json) {
    return SystemWriteReplicationDrSecondaryOperationTokenDeleteRequestFromJSONTyped(json, false);
}
export function SystemWriteReplicationDrSecondaryOperationTokenDeleteRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        drOperationToken: json['dr_operation_token'] == null ? undefined : json['dr_operation_token'],
    };
}
export function SystemWriteReplicationDrSecondaryOperationTokenDeleteRequestToJSON(json) {
    return SystemWriteReplicationDrSecondaryOperationTokenDeleteRequestToJSONTyped(json, false);
}
export function SystemWriteReplicationDrSecondaryOperationTokenDeleteRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        dr_operation_token: value['drOperationToken'],
    };
}
