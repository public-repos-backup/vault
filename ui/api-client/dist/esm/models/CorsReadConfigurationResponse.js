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
 * Check if a given object implements the CorsReadConfigurationResponse interface.
 */
export function instanceOfCorsReadConfigurationResponse(value) {
    return true;
}
export function CorsReadConfigurationResponseFromJSON(json) {
    return CorsReadConfigurationResponseFromJSONTyped(json, false);
}
export function CorsReadConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        allowedHeaders: json['allowed_headers'] == null ? undefined : json['allowed_headers'],
        allowedOrigins: json['allowed_origins'] == null ? undefined : json['allowed_origins'],
        enabled: json['enabled'] == null ? undefined : json['enabled'],
    };
}
export function CorsReadConfigurationResponseToJSON(json) {
    return CorsReadConfigurationResponseToJSONTyped(json, false);
}
export function CorsReadConfigurationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        allowed_headers: value['allowedHeaders'],
        allowed_origins: value['allowedOrigins'],
        enabled: value['enabled'],
    };
}
