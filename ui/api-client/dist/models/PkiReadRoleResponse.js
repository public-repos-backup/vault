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
exports.instanceOfPkiReadRoleResponse = instanceOfPkiReadRoleResponse;
exports.PkiReadRoleResponseFromJSON = PkiReadRoleResponseFromJSON;
exports.PkiReadRoleResponseFromJSONTyped = PkiReadRoleResponseFromJSONTyped;
exports.PkiReadRoleResponseToJSON = PkiReadRoleResponseToJSON;
exports.PkiReadRoleResponseToJSONTyped = PkiReadRoleResponseToJSONTyped;
/**
 * Check if a given object implements the PkiReadRoleResponse interface.
 */
function instanceOfPkiReadRoleResponse(value) {
    return true;
}
function PkiReadRoleResponseFromJSON(json) {
    return PkiReadRoleResponseFromJSONTyped(json, false);
}
function PkiReadRoleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        allowAnyName: json['allow_any_name'] == null ? undefined : json['allow_any_name'],
        allowBareDomains: json['allow_bare_domains'] == null ? undefined : json['allow_bare_domains'],
        allowGlobDomains: json['allow_glob_domains'] == null ? undefined : json['allow_glob_domains'],
        allowIpSans: json['allow_ip_sans'] == null ? undefined : json['allow_ip_sans'],
        allowLocalhost: json['allow_localhost'] == null ? undefined : json['allow_localhost'],
        allowSubdomains: json['allow_subdomains'] == null ? undefined : json['allow_subdomains'],
        allowTokenDisplayname: json['allow_token_displayname'] == null ? undefined : json['allow_token_displayname'],
        allowWildcardCertificates: json['allow_wildcard_certificates'] == null ? undefined : json['allow_wildcard_certificates'],
        allowedDomains: json['allowed_domains'] == null ? undefined : json['allowed_domains'],
        allowedDomainsTemplate: json['allowed_domains_template'] == null ? undefined : json['allowed_domains_template'],
        allowedOtherSans: json['allowed_other_sans'] == null ? undefined : json['allowed_other_sans'],
        allowedSerialNumbers: json['allowed_serial_numbers'] == null ? undefined : json['allowed_serial_numbers'],
        allowedUriSans: json['allowed_uri_sans'] == null ? undefined : json['allowed_uri_sans'],
        allowedUriSansTemplate: json['allowed_uri_sans_template'] == null ? undefined : json['allowed_uri_sans_template'],
        allowedUserIds: json['allowed_user_ids'] == null ? undefined : json['allowed_user_ids'],
        basicConstraintsValidForNonCa: json['basic_constraints_valid_for_non_ca'] == null
            ? undefined
            : json['basic_constraints_valid_for_non_ca'],
        clientFlag: json['client_flag'] == null ? undefined : json['client_flag'],
        cnValidations: json['cn_validations'] == null ? undefined : json['cn_validations'],
        codeSigningFlag: json['code_signing_flag'] == null ? undefined : json['code_signing_flag'],
        country: json['country'] == null ? undefined : json['country'],
        emailProtectionFlag: json['email_protection_flag'] == null ? undefined : json['email_protection_flag'],
        enforceHostnames: json['enforce_hostnames'] == null ? undefined : json['enforce_hostnames'],
        extKeyUsage: json['ext_key_usage'] == null ? undefined : json['ext_key_usage'],
        extKeyUsageOids: json['ext_key_usage_oids'] == null ? undefined : json['ext_key_usage_oids'],
        generateLease: json['generate_lease'] == null ? undefined : json['generate_lease'],
        issuerRef: json['issuer_ref'] == null ? undefined : json['issuer_ref'],
        keyBits: json['key_bits'] == null ? undefined : json['key_bits'],
        keyType: json['key_type'] == null ? undefined : json['key_type'],
        keyUsage: json['key_usage'] == null ? undefined : json['key_usage'],
        locality: json['locality'] == null ? undefined : json['locality'],
        maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
        noStore: json['no_store'] == null ? undefined : json['no_store'],
        noStoreMetadata: json['no_store_metadata'] == null ? undefined : json['no_store_metadata'],
        notAfter: json['not_after'] == null ? undefined : json['not_after'],
        notBeforeDuration: json['not_before_duration'] == null ? undefined : json['not_before_duration'],
        organization: json['organization'] == null ? undefined : json['organization'],
        ou: json['ou'] == null ? undefined : json['ou'],
        policyIdentifiers: json['policy_identifiers'] == null ? undefined : json['policy_identifiers'],
        postalCode: json['postal_code'] == null ? undefined : json['postal_code'],
        province: json['province'] == null ? undefined : json['province'],
        requireCn: json['require_cn'] == null ? undefined : json['require_cn'],
        serialNumberSource: json['serial_number_source'] == null ? undefined : json['serial_number_source'],
        serverFlag: json['server_flag'] == null ? undefined : json['server_flag'],
        signatureBits: json['signature_bits'] == null ? undefined : json['signature_bits'],
        streetAddress: json['street_address'] == null ? undefined : json['street_address'],
        ttl: json['ttl'] == null ? undefined : json['ttl'],
        useCsrCommonName: json['use_csr_common_name'] == null ? undefined : json['use_csr_common_name'],
        useCsrSans: json['use_csr_sans'] == null ? undefined : json['use_csr_sans'],
        usePss: json['use_pss'] == null ? undefined : json['use_pss'],
    };
}
function PkiReadRoleResponseToJSON(json) {
    return PkiReadRoleResponseToJSONTyped(json, false);
}
function PkiReadRoleResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        allow_any_name: value['allowAnyName'],
        allow_bare_domains: value['allowBareDomains'],
        allow_glob_domains: value['allowGlobDomains'],
        allow_ip_sans: value['allowIpSans'],
        allow_localhost: value['allowLocalhost'],
        allow_subdomains: value['allowSubdomains'],
        allow_token_displayname: value['allowTokenDisplayname'],
        allow_wildcard_certificates: value['allowWildcardCertificates'],
        allowed_domains: value['allowedDomains'],
        allowed_domains_template: value['allowedDomainsTemplate'],
        allowed_other_sans: value['allowedOtherSans'],
        allowed_serial_numbers: value['allowedSerialNumbers'],
        allowed_uri_sans: value['allowedUriSans'],
        allowed_uri_sans_template: value['allowedUriSansTemplate'],
        allowed_user_ids: value['allowedUserIds'],
        basic_constraints_valid_for_non_ca: value['basicConstraintsValidForNonCa'],
        client_flag: value['clientFlag'],
        cn_validations: value['cnValidations'],
        code_signing_flag: value['codeSigningFlag'],
        country: value['country'],
        email_protection_flag: value['emailProtectionFlag'],
        enforce_hostnames: value['enforceHostnames'],
        ext_key_usage: value['extKeyUsage'],
        ext_key_usage_oids: value['extKeyUsageOids'],
        generate_lease: value['generateLease'],
        issuer_ref: value['issuerRef'],
        key_bits: value['keyBits'],
        key_type: value['keyType'],
        key_usage: value['keyUsage'],
        locality: value['locality'],
        max_ttl: value['maxTtl'],
        no_store: value['noStore'],
        no_store_metadata: value['noStoreMetadata'],
        not_after: value['notAfter'],
        not_before_duration: value['notBeforeDuration'],
        organization: value['organization'],
        ou: value['ou'],
        policy_identifiers: value['policyIdentifiers'],
        postal_code: value['postalCode'],
        province: value['province'],
        require_cn: value['requireCn'],
        serial_number_source: value['serialNumberSource'],
        server_flag: value['serverFlag'],
        signature_bits: value['signatureBits'],
        street_address: value['streetAddress'],
        ttl: value['ttl'],
        use_csr_common_name: value['useCsrCommonName'],
        use_csr_sans: value['useCsrSans'],
        use_pss: value['usePss'],
    };
}
