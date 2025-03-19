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
exports.KerberosConfigureLdapRequestTlsMinVersionEnum = exports.KerberosConfigureLdapRequestTlsMaxVersionEnum = exports.KerberosConfigureLdapRequestDereferenceAliasesEnum = void 0;
exports.instanceOfKerberosConfigureLdapRequest = instanceOfKerberosConfigureLdapRequest;
exports.KerberosConfigureLdapRequestFromJSON = KerberosConfigureLdapRequestFromJSON;
exports.KerberosConfigureLdapRequestFromJSONTyped = KerberosConfigureLdapRequestFromJSONTyped;
exports.KerberosConfigureLdapRequestToJSON = KerberosConfigureLdapRequestToJSON;
exports.KerberosConfigureLdapRequestToJSONTyped = KerberosConfigureLdapRequestToJSONTyped;
/**
 * @export
 * @enum {string}
 */
var KerberosConfigureLdapRequestDereferenceAliasesEnum;
(function (KerberosConfigureLdapRequestDereferenceAliasesEnum) {
    KerberosConfigureLdapRequestDereferenceAliasesEnum["NEVER"] = "never";
    KerberosConfigureLdapRequestDereferenceAliasesEnum["FINDING"] = "finding";
    KerberosConfigureLdapRequestDereferenceAliasesEnum["SEARCHING"] = "searching";
    KerberosConfigureLdapRequestDereferenceAliasesEnum["ALWAYS"] = "always";
})(KerberosConfigureLdapRequestDereferenceAliasesEnum || (exports.KerberosConfigureLdapRequestDereferenceAliasesEnum = KerberosConfigureLdapRequestDereferenceAliasesEnum = {}));
/**
 * @export
 * @enum {string}
 */
var KerberosConfigureLdapRequestTlsMaxVersionEnum;
(function (KerberosConfigureLdapRequestTlsMaxVersionEnum) {
    KerberosConfigureLdapRequestTlsMaxVersionEnum["TLS10"] = "tls10";
    KerberosConfigureLdapRequestTlsMaxVersionEnum["TLS11"] = "tls11";
    KerberosConfigureLdapRequestTlsMaxVersionEnum["TLS12"] = "tls12";
    KerberosConfigureLdapRequestTlsMaxVersionEnum["TLS13"] = "tls13";
})(KerberosConfigureLdapRequestTlsMaxVersionEnum || (exports.KerberosConfigureLdapRequestTlsMaxVersionEnum = KerberosConfigureLdapRequestTlsMaxVersionEnum = {}));
/**
 * @export
 * @enum {string}
 */
var KerberosConfigureLdapRequestTlsMinVersionEnum;
(function (KerberosConfigureLdapRequestTlsMinVersionEnum) {
    KerberosConfigureLdapRequestTlsMinVersionEnum["TLS10"] = "tls10";
    KerberosConfigureLdapRequestTlsMinVersionEnum["TLS11"] = "tls11";
    KerberosConfigureLdapRequestTlsMinVersionEnum["TLS12"] = "tls12";
    KerberosConfigureLdapRequestTlsMinVersionEnum["TLS13"] = "tls13";
})(KerberosConfigureLdapRequestTlsMinVersionEnum || (exports.KerberosConfigureLdapRequestTlsMinVersionEnum = KerberosConfigureLdapRequestTlsMinVersionEnum = {}));
/**
 * Check if a given object implements the KerberosConfigureLdapRequest interface.
 */
function instanceOfKerberosConfigureLdapRequest(value) {
    return true;
}
function KerberosConfigureLdapRequestFromJSON(json) {
    return KerberosConfigureLdapRequestFromJSONTyped(json, false);
}
function KerberosConfigureLdapRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        anonymousGroupSearch: json['anonymous_group_search'] == null ? undefined : json['anonymous_group_search'],
        binddn: json['binddn'] == null ? undefined : json['binddn'],
        bindpass: json['bindpass'] == null ? undefined : json['bindpass'],
        caseSensitiveNames: json['case_sensitive_names'] == null ? undefined : json['case_sensitive_names'],
        certificate: json['certificate'] == null ? undefined : json['certificate'],
        clientTlsCert: json['client_tls_cert'] == null ? undefined : json['client_tls_cert'],
        clientTlsKey: json['client_tls_key'] == null ? undefined : json['client_tls_key'],
        connectionTimeout: json['connection_timeout'] == null ? undefined : json['connection_timeout'],
        denyNullBind: json['deny_null_bind'] == null ? undefined : json['deny_null_bind'],
        dereferenceAliases: json['dereference_aliases'] == null ? undefined : json['dereference_aliases'],
        discoverdn: json['discoverdn'] == null ? undefined : json['discoverdn'],
        enableSamaccountnameLogin: json['enable_samaccountname_login'] == null ? undefined : json['enable_samaccountname_login'],
        groupattr: json['groupattr'] == null ? undefined : json['groupattr'],
        groupdn: json['groupdn'] == null ? undefined : json['groupdn'],
        groupfilter: json['groupfilter'] == null ? undefined : json['groupfilter'],
        insecureTls: json['insecure_tls'] == null ? undefined : json['insecure_tls'],
        maxPageSize: json['max_page_size'] == null ? undefined : json['max_page_size'],
        requestTimeout: json['request_timeout'] == null ? undefined : json['request_timeout'],
        starttls: json['starttls'] == null ? undefined : json['starttls'],
        tlsMaxVersion: json['tls_max_version'] == null ? undefined : json['tls_max_version'],
        tlsMinVersion: json['tls_min_version'] == null ? undefined : json['tls_min_version'],
        tokenBoundCidrs: json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        tokenExplicitMaxTtl: json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        tokenMaxTtl: json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        tokenNoDefaultPolicy: json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        tokenNumUses: json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        tokenPeriod: json['token_period'] == null ? undefined : json['token_period'],
        tokenPolicies: json['token_policies'] == null ? undefined : json['token_policies'],
        tokenTtl: json['token_ttl'] == null ? undefined : json['token_ttl'],
        tokenType: json['token_type'] == null ? undefined : json['token_type'],
        upndomain: json['upndomain'] == null ? undefined : json['upndomain'],
        url: json['url'] == null ? undefined : json['url'],
        usePre111GroupCnBehavior: json['use_pre111_group_cn_behavior'] == null ? undefined : json['use_pre111_group_cn_behavior'],
        useTokenGroups: json['use_token_groups'] == null ? undefined : json['use_token_groups'],
        userattr: json['userattr'] == null ? undefined : json['userattr'],
        userdn: json['userdn'] == null ? undefined : json['userdn'],
        userfilter: json['userfilter'] == null ? undefined : json['userfilter'],
        usernameAsAlias: json['username_as_alias'] == null ? undefined : json['username_as_alias'],
    };
}
function KerberosConfigureLdapRequestToJSON(json) {
    return KerberosConfigureLdapRequestToJSONTyped(json, false);
}
function KerberosConfigureLdapRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        anonymous_group_search: value['anonymousGroupSearch'],
        binddn: value['binddn'],
        bindpass: value['bindpass'],
        case_sensitive_names: value['caseSensitiveNames'],
        certificate: value['certificate'],
        client_tls_cert: value['clientTlsCert'],
        client_tls_key: value['clientTlsKey'],
        connection_timeout: value['connectionTimeout'],
        deny_null_bind: value['denyNullBind'],
        dereference_aliases: value['dereferenceAliases'],
        discoverdn: value['discoverdn'],
        enable_samaccountname_login: value['enableSamaccountnameLogin'],
        groupattr: value['groupattr'],
        groupdn: value['groupdn'],
        groupfilter: value['groupfilter'],
        insecure_tls: value['insecureTls'],
        max_page_size: value['maxPageSize'],
        request_timeout: value['requestTimeout'],
        starttls: value['starttls'],
        tls_max_version: value['tlsMaxVersion'],
        tls_min_version: value['tlsMinVersion'],
        token_bound_cidrs: value['tokenBoundCidrs'],
        token_explicit_max_ttl: value['tokenExplicitMaxTtl'],
        token_max_ttl: value['tokenMaxTtl'],
        token_no_default_policy: value['tokenNoDefaultPolicy'],
        token_num_uses: value['tokenNumUses'],
        token_period: value['tokenPeriod'],
        token_policies: value['tokenPolicies'],
        token_ttl: value['tokenTtl'],
        token_type: value['tokenType'],
        upndomain: value['upndomain'],
        url: value['url'],
        use_pre111_group_cn_behavior: value['usePre111GroupCnBehavior'],
        use_token_groups: value['useTokenGroups'],
        userattr: value['userattr'],
        userdn: value['userdn'],
        userfilter: value['userfilter'],
        username_as_alias: value['usernameAsAlias'],
    };
}
