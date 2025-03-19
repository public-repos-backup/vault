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
exports.instanceOfJwtWriteRoleRequest = instanceOfJwtWriteRoleRequest;
exports.JwtWriteRoleRequestFromJSON = JwtWriteRoleRequestFromJSON;
exports.JwtWriteRoleRequestFromJSONTyped = JwtWriteRoleRequestFromJSONTyped;
exports.JwtWriteRoleRequestToJSON = JwtWriteRoleRequestToJSON;
exports.JwtWriteRoleRequestToJSONTyped = JwtWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the JwtWriteRoleRequest interface.
 */
function instanceOfJwtWriteRoleRequest(value) {
    return true;
}
function JwtWriteRoleRequestFromJSON(json) {
    return JwtWriteRoleRequestFromJSONTyped(json, false);
}
function JwtWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        allowedRedirectUris: json['allowed_redirect_uris'] == null ? undefined : json['allowed_redirect_uris'],
        boundAudiences: json['bound_audiences'] == null ? undefined : json['bound_audiences'],
        boundCidrs: json['bound_cidrs'] == null ? undefined : json['bound_cidrs'],
        boundClaims: json['bound_claims'] == null ? undefined : json['bound_claims'],
        boundClaimsType: json['bound_claims_type'] == null ? undefined : json['bound_claims_type'],
        boundSubject: json['bound_subject'] == null ? undefined : json['bound_subject'],
        claimMappings: json['claim_mappings'] == null ? undefined : json['claim_mappings'],
        clockSkewLeeway: json['clock_skew_leeway'] == null ? undefined : json['clock_skew_leeway'],
        expirationLeeway: json['expiration_leeway'] == null ? undefined : json['expiration_leeway'],
        groupsClaim: json['groups_claim'] == null ? undefined : json['groups_claim'],
        maxAge: json['max_age'] == null ? undefined : json['max_age'],
        maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
        notBeforeLeeway: json['not_before_leeway'] == null ? undefined : json['not_before_leeway'],
        numUses: json['num_uses'] == null ? undefined : json['num_uses'],
        oidcScopes: json['oidc_scopes'] == null ? undefined : json['oidc_scopes'],
        period: json['period'] == null ? undefined : json['period'],
        policies: json['policies'] == null ? undefined : json['policies'],
        roleType: json['role_type'] == null ? undefined : json['role_type'],
        tokenBoundCidrs: json['token_bound_cidrs'] == null ? undefined : json['token_bound_cidrs'],
        tokenExplicitMaxTtl: json['token_explicit_max_ttl'] == null ? undefined : json['token_explicit_max_ttl'],
        tokenMaxTtl: json['token_max_ttl'] == null ? undefined : json['token_max_ttl'],
        tokenNoDefaultPolicy: json['token_no_default_policy'] == null ? undefined : json['token_no_default_policy'],
        tokenNumUses: json['token_num_uses'] == null ? undefined : json['token_num_uses'],
        tokenPeriod: json['token_period'] == null ? undefined : json['token_period'],
        tokenPolicies: json['token_policies'] == null ? undefined : json['token_policies'],
        tokenTtl: json['token_ttl'] == null ? undefined : json['token_ttl'],
        tokenType: json['token_type'] == null ? undefined : json['token_type'],
        ttl: json['ttl'] == null ? undefined : json['ttl'],
        userClaim: json['user_claim'] == null ? undefined : json['user_claim'],
        userClaimJsonPointer: json['user_claim_json_pointer'] == null ? undefined : json['user_claim_json_pointer'],
        verboseOidcLogging: json['verbose_oidc_logging'] == null ? undefined : json['verbose_oidc_logging'],
    };
}
function JwtWriteRoleRequestToJSON(json) {
    return JwtWriteRoleRequestToJSONTyped(json, false);
}
function JwtWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        allowed_redirect_uris: value['allowedRedirectUris'],
        bound_audiences: value['boundAudiences'],
        bound_cidrs: value['boundCidrs'],
        bound_claims: value['boundClaims'],
        bound_claims_type: value['boundClaimsType'],
        bound_subject: value['boundSubject'],
        claim_mappings: value['claimMappings'],
        clock_skew_leeway: value['clockSkewLeeway'],
        expiration_leeway: value['expirationLeeway'],
        groups_claim: value['groupsClaim'],
        max_age: value['maxAge'],
        max_ttl: value['maxTtl'],
        not_before_leeway: value['notBeforeLeeway'],
        num_uses: value['numUses'],
        oidc_scopes: value['oidcScopes'],
        period: value['period'],
        policies: value['policies'],
        role_type: value['roleType'],
        token_bound_cidrs: value['tokenBoundCidrs'],
        token_explicit_max_ttl: value['tokenExplicitMaxTtl'],
        token_max_ttl: value['tokenMaxTtl'],
        token_no_default_policy: value['tokenNoDefaultPolicy'],
        token_num_uses: value['tokenNumUses'],
        token_period: value['tokenPeriod'],
        token_policies: value['tokenPolicies'],
        token_ttl: value['tokenTtl'],
        token_type: value['tokenType'],
        ttl: value['ttl'],
        user_claim: value['userClaim'],
        user_claim_json_pointer: value['userClaimJsonPointer'],
        verbose_oidc_logging: value['verboseOidcLogging'],
    };
}
