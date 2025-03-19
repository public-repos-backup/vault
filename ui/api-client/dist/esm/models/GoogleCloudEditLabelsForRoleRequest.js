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
 * Check if a given object implements the GoogleCloudEditLabelsForRoleRequest interface.
 */
export function instanceOfGoogleCloudEditLabelsForRoleRequest(value) {
    return true;
}
export function GoogleCloudEditLabelsForRoleRequestFromJSON(json) {
    return GoogleCloudEditLabelsForRoleRequestFromJSONTyped(json, false);
}
export function GoogleCloudEditLabelsForRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        add: json['add'] == null ? undefined : json['add'],
        remove: json['remove'] == null ? undefined : json['remove'],
    };
}
export function GoogleCloudEditLabelsForRoleRequestToJSON(json) {
    return GoogleCloudEditLabelsForRoleRequestToJSONTyped(json, false);
}
export function GoogleCloudEditLabelsForRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        add: value['add'],
        remove: value['remove'],
    };
}
