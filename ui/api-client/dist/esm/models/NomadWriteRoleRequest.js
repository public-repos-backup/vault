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
 * Check if a given object implements the NomadWriteRoleRequest interface.
 */
export function instanceOfNomadWriteRoleRequest(value) {
    return true;
}
export function NomadWriteRoleRequestFromJSON(json) {
    return NomadWriteRoleRequestFromJSONTyped(json, false);
}
export function NomadWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        global: json['global'] == null ? undefined : json['global'],
        policies: json['policies'] == null ? undefined : json['policies'],
        type: json['type'] == null ? undefined : json['type'],
    };
}
export function NomadWriteRoleRequestToJSON(json) {
    return NomadWriteRoleRequestToJSONTyped(json, false);
}
export function NomadWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        global: value['global'],
        policies: value['policies'],
        type: value['type'],
    };
}
