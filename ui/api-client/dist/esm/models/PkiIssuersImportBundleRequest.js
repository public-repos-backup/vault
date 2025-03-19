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
 * Check if a given object implements the PkiIssuersImportBundleRequest interface.
 */
export function instanceOfPkiIssuersImportBundleRequest(value) {
    return true;
}
export function PkiIssuersImportBundleRequestFromJSON(json) {
    return PkiIssuersImportBundleRequestFromJSONTyped(json, false);
}
export function PkiIssuersImportBundleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        pemBundle: json['pem_bundle'] == null ? undefined : json['pem_bundle'],
    };
}
export function PkiIssuersImportBundleRequestToJSON(json) {
    return PkiIssuersImportBundleRequestToJSONTyped(json, false);
}
export function PkiIssuersImportBundleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        pem_bundle: value['pemBundle'],
    };
}
