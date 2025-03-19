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
exports.SshWriteRoleRequestKeyTypeEnum = exports.SshWriteRoleRequestAlgorithmSignerEnum = void 0;
exports.instanceOfSshWriteRoleRequest = instanceOfSshWriteRoleRequest;
exports.SshWriteRoleRequestFromJSON = SshWriteRoleRequestFromJSON;
exports.SshWriteRoleRequestFromJSONTyped = SshWriteRoleRequestFromJSONTyped;
exports.SshWriteRoleRequestToJSON = SshWriteRoleRequestToJSON;
exports.SshWriteRoleRequestToJSONTyped = SshWriteRoleRequestToJSONTyped;
/**
 * @export
 * @enum {string}
 */
var SshWriteRoleRequestAlgorithmSignerEnum;
(function (SshWriteRoleRequestAlgorithmSignerEnum) {
    SshWriteRoleRequestAlgorithmSignerEnum["EMPTY"] = "";
    SshWriteRoleRequestAlgorithmSignerEnum["DEFAULT"] = "default";
    SshWriteRoleRequestAlgorithmSignerEnum["SSH_RSA"] = "ssh-rsa";
    SshWriteRoleRequestAlgorithmSignerEnum["RSA_SHA2_256"] = "rsa-sha2-256";
    SshWriteRoleRequestAlgorithmSignerEnum["RSA_SHA2_512"] = "rsa-sha2-512";
})(SshWriteRoleRequestAlgorithmSignerEnum || (exports.SshWriteRoleRequestAlgorithmSignerEnum = SshWriteRoleRequestAlgorithmSignerEnum = {}));
/**
 * @export
 * @enum {string}
 */
var SshWriteRoleRequestKeyTypeEnum;
(function (SshWriteRoleRequestKeyTypeEnum) {
    SshWriteRoleRequestKeyTypeEnum["OTP"] = "otp";
    SshWriteRoleRequestKeyTypeEnum["CA"] = "ca";
})(SshWriteRoleRequestKeyTypeEnum || (exports.SshWriteRoleRequestKeyTypeEnum = SshWriteRoleRequestKeyTypeEnum = {}));
/**
 * Check if a given object implements the SshWriteRoleRequest interface.
 */
function instanceOfSshWriteRoleRequest(value) {
    return true;
}
function SshWriteRoleRequestFromJSON(json) {
    return SshWriteRoleRequestFromJSONTyped(json, false);
}
function SshWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        algorithmSigner: json['algorithm_signer'] == null ? undefined : json['algorithm_signer'],
        allowBareDomains: json['allow_bare_domains'] == null ? undefined : json['allow_bare_domains'],
        allowEmptyPrincipals: json['allow_empty_principals'] == null ? undefined : json['allow_empty_principals'],
        allowHostCertificates: json['allow_host_certificates'] == null ? undefined : json['allow_host_certificates'],
        allowSubdomains: json['allow_subdomains'] == null ? undefined : json['allow_subdomains'],
        allowUserCertificates: json['allow_user_certificates'] == null ? undefined : json['allow_user_certificates'],
        allowUserKeyIds: json['allow_user_key_ids'] == null ? undefined : json['allow_user_key_ids'],
        allowedCriticalOptions: json['allowed_critical_options'] == null ? undefined : json['allowed_critical_options'],
        allowedDomains: json['allowed_domains'] == null ? undefined : json['allowed_domains'],
        allowedDomainsTemplate: json['allowed_domains_template'] == null ? undefined : json['allowed_domains_template'],
        allowedExtensions: json['allowed_extensions'] == null ? undefined : json['allowed_extensions'],
        allowedUserKeyLengths: json['allowed_user_key_lengths'] == null ? undefined : json['allowed_user_key_lengths'],
        allowedUsers: json['allowed_users'] == null ? undefined : json['allowed_users'],
        allowedUsersTemplate: json['allowed_users_template'] == null ? undefined : json['allowed_users_template'],
        cidrList: json['cidr_list'] == null ? undefined : json['cidr_list'],
        defaultCriticalOptions: json['default_critical_options'] == null ? undefined : json['default_critical_options'],
        defaultExtensions: json['default_extensions'] == null ? undefined : json['default_extensions'],
        defaultExtensionsTemplate: json['default_extensions_template'] == null ? undefined : json['default_extensions_template'],
        defaultUser: json['default_user'] == null ? undefined : json['default_user'],
        defaultUserTemplate: json['default_user_template'] == null ? undefined : json['default_user_template'],
        excludeCidrList: json['exclude_cidr_list'] == null ? undefined : json['exclude_cidr_list'],
        keyIdFormat: json['key_id_format'] == null ? undefined : json['key_id_format'],
        keyType: json['key_type'] == null ? undefined : json['key_type'],
        maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
        notBeforeDuration: json['not_before_duration'] == null ? undefined : json['not_before_duration'],
        port: json['port'] == null ? undefined : json['port'],
        ttl: json['ttl'] == null ? undefined : json['ttl'],
    };
}
function SshWriteRoleRequestToJSON(json) {
    return SshWriteRoleRequestToJSONTyped(json, false);
}
function SshWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        algorithm_signer: value['algorithmSigner'],
        allow_bare_domains: value['allowBareDomains'],
        allow_empty_principals: value['allowEmptyPrincipals'],
        allow_host_certificates: value['allowHostCertificates'],
        allow_subdomains: value['allowSubdomains'],
        allow_user_certificates: value['allowUserCertificates'],
        allow_user_key_ids: value['allowUserKeyIds'],
        allowed_critical_options: value['allowedCriticalOptions'],
        allowed_domains: value['allowedDomains'],
        allowed_domains_template: value['allowedDomainsTemplate'],
        allowed_extensions: value['allowedExtensions'],
        allowed_user_key_lengths: value['allowedUserKeyLengths'],
        allowed_users: value['allowedUsers'],
        allowed_users_template: value['allowedUsersTemplate'],
        cidr_list: value['cidrList'],
        default_critical_options: value['defaultCriticalOptions'],
        default_extensions: value['defaultExtensions'],
        default_extensions_template: value['defaultExtensionsTemplate'],
        default_user: value['defaultUser'],
        default_user_template: value['defaultUserTemplate'],
        exclude_cidr_list: value['excludeCidrList'],
        key_id_format: value['keyIdFormat'],
        key_type: value['keyType'],
        max_ttl: value['maxTtl'],
        not_before_duration: value['notBeforeDuration'],
        port: value['port'],
        ttl: value['ttl'],
    };
}
