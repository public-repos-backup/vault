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
 * Check if a given object implements the TransitRewrapRequest interface.
 */
export function instanceOfTransitRewrapRequest(value) {
    return true;
}
export function TransitRewrapRequestFromJSON(json) {
    return TransitRewrapRequestFromJSONTyped(json, false);
}
export function TransitRewrapRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        batchInput: json['batch_input'] == null ? undefined : json['batch_input'],
        ciphertext: json['ciphertext'] == null ? undefined : json['ciphertext'],
        context: json['context'] == null ? undefined : json['context'],
        decryptPaddingScheme: json['decrypt_padding_scheme'] == null ? undefined : json['decrypt_padding_scheme'],
        encryptPaddingScheme: json['encrypt_padding_scheme'] == null ? undefined : json['encrypt_padding_scheme'],
        keyVersion: json['key_version'] == null ? undefined : json['key_version'],
        nonce: json['nonce'] == null ? undefined : json['nonce'],
    };
}
export function TransitRewrapRequestToJSON(json) {
    return TransitRewrapRequestToJSONTyped(json, false);
}
export function TransitRewrapRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        batch_input: value['batchInput'],
        ciphertext: value['ciphertext'],
        context: value['context'],
        decrypt_padding_scheme: value['decryptPaddingScheme'],
        encrypt_padding_scheme: value['encryptPaddingScheme'],
        key_version: value['keyVersion'],
        nonce: value['nonce'],
    };
}
