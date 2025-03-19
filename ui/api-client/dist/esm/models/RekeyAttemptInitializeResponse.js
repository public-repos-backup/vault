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
 * Check if a given object implements the RekeyAttemptInitializeResponse interface.
 */
export function instanceOfRekeyAttemptInitializeResponse(value) {
    return true;
}
export function RekeyAttemptInitializeResponseFromJSON(json) {
    return RekeyAttemptInitializeResponseFromJSONTyped(json, false);
}
export function RekeyAttemptInitializeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        backup: json['backup'] == null ? undefined : json['backup'],
        n: json['n'] == null ? undefined : json['n'],
        nonce: json['nonce'] == null ? undefined : json['nonce'],
        pgpFingerprints: json['pgp_fingerprints'] == null ? undefined : json['pgp_fingerprints'],
        progress: json['progress'] == null ? undefined : json['progress'],
        required: json['required'] == null ? undefined : json['required'],
        started: json['started'] == null ? undefined : json['started'],
        t: json['t'] == null ? undefined : json['t'],
        verificationNonce: json['verification_nonce'] == null ? undefined : json['verification_nonce'],
        verificationRequired: json['verification_required'] == null ? undefined : json['verification_required'],
    };
}
export function RekeyAttemptInitializeResponseToJSON(json) {
    return RekeyAttemptInitializeResponseToJSONTyped(json, false);
}
export function RekeyAttemptInitializeResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        backup: value['backup'],
        n: value['n'],
        nonce: value['nonce'],
        pgp_fingerprints: value['pgpFingerprints'],
        progress: value['progress'],
        required: value['required'],
        started: value['started'],
        t: value['t'],
        verification_nonce: value['verificationNonce'],
        verification_required: value['verificationRequired'],
    };
}
