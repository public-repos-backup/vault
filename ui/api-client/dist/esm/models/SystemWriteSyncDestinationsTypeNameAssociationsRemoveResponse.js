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
 * Check if a given object implements the SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponse interface.
 */
export function instanceOfSystemWriteSyncDestinationsTypeNameAssociationsRemoveResponse(value) {
    return true;
}
export function SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponseFromJSON(json) {
    return SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponseFromJSONTyped(json, false);
}
export function SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        associatedSecrets: json['associated_secrets'] == null ? undefined : json['associated_secrets'],
    };
}
export function SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponseToJSON(json) {
    return SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponseToJSONTyped(json, false);
}
export function SystemWriteSyncDestinationsTypeNameAssociationsRemoveResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        associated_secrets: value['associatedSecrets'],
    };
}
