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
 * Check if a given object implements the UiConfigUpdateCustomMessageResponse interface.
 */
export function instanceOfUiConfigUpdateCustomMessageResponse(value) {
    return true;
}
export function UiConfigUpdateCustomMessageResponseFromJSON(json) {
    return UiConfigUpdateCustomMessageResponseFromJSONTyped(json, false);
}
export function UiConfigUpdateCustomMessageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        authenticated: json['authenticated'] == null ? undefined : json['authenticated'],
        endTime: json['end_time'] == null ? undefined : new Date(json['end_time']),
        id: json['id'] == null ? undefined : json['id'],
        link: json['link'] == null ? undefined : json['link'],
        message: json['message'] == null ? undefined : json['message'],
        options: json['options'] == null ? undefined : json['options'],
        startTime: json['start_time'] == null ? undefined : new Date(json['start_time']),
        title: json['title'] == null ? undefined : json['title'],
        type: json['type'] == null ? undefined : json['type'],
    };
}
export function UiConfigUpdateCustomMessageResponseToJSON(json) {
    return UiConfigUpdateCustomMessageResponseToJSONTyped(json, false);
}
export function UiConfigUpdateCustomMessageResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        authenticated: value['authenticated'],
        end_time: value['endTime'] == null ? undefined : value['endTime'].toISOString(),
        id: value['id'],
        link: value['link'],
        message: value['message'],
        options: value['options'],
        start_time: value['startTime'] == null ? undefined : value['startTime'].toISOString(),
        title: value['title'],
        type: value['type'],
    };
}
