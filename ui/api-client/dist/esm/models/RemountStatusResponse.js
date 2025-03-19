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
 * Check if a given object implements the RemountStatusResponse interface.
 */
export function instanceOfRemountStatusResponse(value) {
    return true;
}
export function RemountStatusResponseFromJSON(json) {
    return RemountStatusResponseFromJSONTyped(json, false);
}
export function RemountStatusResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        migrationId: json['migration_id'] == null ? undefined : json['migration_id'],
        migrationInfo: json['migration_info'] == null ? undefined : json['migration_info'],
    };
}
export function RemountStatusResponseToJSON(json) {
    return RemountStatusResponseToJSONTyped(json, false);
}
export function RemountStatusResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        migration_id: value['migrationId'],
        migration_info: value['migrationInfo'],
    };
}
