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
 * @export
 * @enum {string}
 */
export var PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum["PEM_BUNDLE"] = "pem_bundle";
})(PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum || (PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFormatEnum = {}));
/**
 * @export
 * @enum {string}
 */
export var PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum) {
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum["RSA"] = "rsa";
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum["EC"] = "ec";
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum["ED25519"] = "ed25519";
})(PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum || (PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestKeyTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
export var PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum["PKCS8"] = "pkcs8";
})(PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum || (PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestPrivateKeyFormatEnum = {}));
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequest(value) {
    return true;
}
export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFromJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { format: json['format'] == null ? undefined : json['format'], keyBits: json['key_bits'] == null ? undefined : json['key_bits'], keyType: json['key_type'] == null ? undefined : json['key_type'], privateKeyFormat: json['private_key_format'] == null ? undefined : json['private_key_format'], removeRootsFromChain: json['remove_roots_from_chain'] == null ? undefined : json['remove_roots_from_chain'] });
}
export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestToJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, value), { format: value['format'], key_bits: value['keyBits'], key_type: value['keyType'], private_key_format: value['privateKeyFormat'], remove_roots_from_chain: value['removeRootsFromChain'] });
}
