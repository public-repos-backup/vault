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
 * Check if a given object implements the KubernetesLoginRequest interface.
 */
export function instanceOfKubernetesLoginRequest(value) {
    return true;
}
export function KubernetesLoginRequestFromJSON(json) {
    return KubernetesLoginRequestFromJSONTyped(json, false);
}
export function KubernetesLoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        jwt: json['jwt'] == null ? undefined : json['jwt'],
        role: json['role'] == null ? undefined : json['role'],
    };
}
export function KubernetesLoginRequestToJSON(json) {
    return KubernetesLoginRequestToJSONTyped(json, false);
}
export function KubernetesLoginRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        jwt: value['jwt'],
        role: value['role'],
    };
}
