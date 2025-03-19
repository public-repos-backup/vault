"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum = exports.PkiIssuerSignVerbatimWithRoleRequestFormatEnum = void 0;
exports.instanceOfPkiIssuerSignVerbatimWithRoleRequest = instanceOfPkiIssuerSignVerbatimWithRoleRequest;
exports.PkiIssuerSignVerbatimWithRoleRequestFromJSON = PkiIssuerSignVerbatimWithRoleRequestFromJSON;
exports.PkiIssuerSignVerbatimWithRoleRequestFromJSONTyped = PkiIssuerSignVerbatimWithRoleRequestFromJSONTyped;
exports.PkiIssuerSignVerbatimWithRoleRequestToJSON = PkiIssuerSignVerbatimWithRoleRequestToJSON;
exports.PkiIssuerSignVerbatimWithRoleRequestToJSONTyped = PkiIssuerSignVerbatimWithRoleRequestToJSONTyped;
/**
 * @export
 * @enum {string}
 */
var PkiIssuerSignVerbatimWithRoleRequestFormatEnum;
(function (PkiIssuerSignVerbatimWithRoleRequestFormatEnum) {
    PkiIssuerSignVerbatimWithRoleRequestFormatEnum["PEM"] = "pem";
    PkiIssuerSignVerbatimWithRoleRequestFormatEnum["DER"] = "der";
    PkiIssuerSignVerbatimWithRoleRequestFormatEnum["PEM_BUNDLE"] = "pem_bundle";
})(PkiIssuerSignVerbatimWithRoleRequestFormatEnum || (exports.PkiIssuerSignVerbatimWithRoleRequestFormatEnum = PkiIssuerSignVerbatimWithRoleRequestFormatEnum = {}));
/**
 * @export
 * @enum {string}
 */
var PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum;
(function (PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum) {
    PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum["EMPTY"] = "";
    PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum["DER"] = "der";
    PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum["PEM"] = "pem";
    PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum["PKCS8"] = "pkcs8";
})(PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum || (exports.PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum = PkiIssuerSignVerbatimWithRoleRequestPrivateKeyFormatEnum = {}));
/**
 * Check if a given object implements the PkiIssuerSignVerbatimWithRoleRequest interface.
 */
function instanceOfPkiIssuerSignVerbatimWithRoleRequest(value) {
    return true;
}
function PkiIssuerSignVerbatimWithRoleRequestFromJSON(json) {
    return PkiIssuerSignVerbatimWithRoleRequestFromJSONTyped(json, false);
}
function PkiIssuerSignVerbatimWithRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        altNames: json['alt_names'] == null ? undefined : json['alt_names'],
        certMetadata: json['cert_metadata'] == null ? undefined : json['cert_metadata'],
        commonName: json['common_name'] == null ? undefined : json['common_name'],
        csr: json['csr'] == null ? undefined : json['csr'],
        excludeCnFromSans: json['exclude_cn_from_sans'] == null ? undefined : json['exclude_cn_from_sans'],
        extKeyUsage: json['ext_key_usage'] == null ? undefined : json['ext_key_usage'],
        extKeyUsageOids: json['ext_key_usage_oids'] == null ? undefined : json['ext_key_usage_oids'],
        format: json['format'] == null ? undefined : json['format'],
        ipSans: json['ip_sans'] == null ? undefined : json['ip_sans'],
        keyUsage: json['key_usage'] == null ? undefined : json['key_usage'],
        notAfter: json['not_after'] == null ? undefined : json['not_after'],
        otherSans: json['other_sans'] == null ? undefined : json['other_sans'],
        privateKeyFormat: json['private_key_format'] == null ? undefined : json['private_key_format'],
        removeRootsFromChain: json['remove_roots_from_chain'] == null ? undefined : json['remove_roots_from_chain'],
        serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
        signatureBits: json['signature_bits'] == null ? undefined : json['signature_bits'],
        ttl: json['ttl'] == null ? undefined : json['ttl'],
        uriSans: json['uri_sans'] == null ? undefined : json['uri_sans'],
        usePss: json['use_pss'] == null ? undefined : json['use_pss'],
        userIds: json['user_ids'] == null ? undefined : json['user_ids'],
    };
}
function PkiIssuerSignVerbatimWithRoleRequestToJSON(json) {
    return PkiIssuerSignVerbatimWithRoleRequestToJSONTyped(json, false);
}
function PkiIssuerSignVerbatimWithRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        alt_names: value['altNames'],
        cert_metadata: value['certMetadata'],
        common_name: value['commonName'],
        csr: value['csr'],
        exclude_cn_from_sans: value['excludeCnFromSans'],
        ext_key_usage: value['extKeyUsage'],
        ext_key_usage_oids: value['extKeyUsageOids'],
        format: value['format'],
        ip_sans: value['ipSans'],
        key_usage: value['keyUsage'],
        not_after: value['notAfter'],
        other_sans: value['otherSans'],
        private_key_format: value['privateKeyFormat'],
        remove_roots_from_chain: value['removeRootsFromChain'],
        serial_number: value['serialNumber'],
        signature_bits: value['signatureBits'],
        ttl: value['ttl'],
        uri_sans: value['uriSans'],
        use_pss: value['usePss'],
        user_ids: value['userIds'],
    };
}
