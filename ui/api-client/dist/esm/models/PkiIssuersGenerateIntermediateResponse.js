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
 * Check if a given object implements the PkiIssuersGenerateIntermediateResponse interface.
 */
export function instanceOfPkiIssuersGenerateIntermediateResponse(value) {
    return true;
}
export function PkiIssuersGenerateIntermediateResponseFromJSON(json) {
    return PkiIssuersGenerateIntermediateResponseFromJSONTyped(json, false);
}
export function PkiIssuersGenerateIntermediateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        csr: json['csr'] == null ? undefined : json['csr'],
        keyId: json['key_id'] == null ? undefined : json['key_id'],
        privateKey: json['private_key'] == null ? undefined : json['private_key'],
        privateKeyType: json['private_key_type'] == null ? undefined : json['private_key_type'],
    };
}
export function PkiIssuersGenerateIntermediateResponseToJSON(json) {
    return PkiIssuersGenerateIntermediateResponseToJSONTyped(json, false);
}
export function PkiIssuersGenerateIntermediateResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        csr: value['csr'],
        key_id: value['keyId'],
        private_key: value['privateKey'],
        private_key_type: value['privateKeyType'],
    };
}
