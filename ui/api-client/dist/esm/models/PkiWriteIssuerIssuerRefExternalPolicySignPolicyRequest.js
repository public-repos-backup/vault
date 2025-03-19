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
export var PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum["PEM_BUNDLE"] = "pem_bundle";
})(PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum || (PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFormatEnum = {}));
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequest interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicySignPolicyRequest(value) {
    if (!('csr' in value) || value['csr'] === undefined)
        return false;
    return true;
}
export function PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFromJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { csr: json['csr'], format: json['format'] == null ? undefined : json['format'], removeRootsFromChain: json['remove_roots_from_chain'] == null ? undefined : json['remove_roots_from_chain'] });
}
export function PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestToJSONTyped(json, false);
}
export function PkiWriteIssuerIssuerRefExternalPolicySignPolicyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, value), { csr: value['csr'], format: value['format'], remove_roots_from_chain: value['removeRootsFromChain'] });
}
