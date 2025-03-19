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
 * Check if a given object implements the SystemWriteReplicationDrSecondaryMerkleCheckRequest interface.
 */
export function instanceOfSystemWriteReplicationDrSecondaryMerkleCheckRequest(value) {
    return true;
}
export function SystemWriteReplicationDrSecondaryMerkleCheckRequestFromJSON(json) {
    return SystemWriteReplicationDrSecondaryMerkleCheckRequestFromJSONTyped(json, false);
}
export function SystemWriteReplicationDrSecondaryMerkleCheckRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        drOperationToken: json['dr_operation_token'] == null ? undefined : json['dr_operation_token'],
    };
}
export function SystemWriteReplicationDrSecondaryMerkleCheckRequestToJSON(json) {
    return SystemWriteReplicationDrSecondaryMerkleCheckRequestToJSONTyped(json, false);
}
export function SystemWriteReplicationDrSecondaryMerkleCheckRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        dr_operation_token: value['drOperationToken'],
    };
}
