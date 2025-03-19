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
exports.instanceOfCloudFoundryWriteRoleRequest = instanceOfCloudFoundryWriteRoleRequest;
exports.CloudFoundryWriteRoleRequestFromJSON = CloudFoundryWriteRoleRequestFromJSON;
exports.CloudFoundryWriteRoleRequestFromJSONTyped = CloudFoundryWriteRoleRequestFromJSONTyped;
exports.CloudFoundryWriteRoleRequestToJSON = CloudFoundryWriteRoleRequestToJSON;
exports.CloudFoundryWriteRoleRequestToJSONTyped = CloudFoundryWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the CloudFoundryWriteRoleRequest interface.
 */
function instanceOfCloudFoundryWriteRoleRequest(value) {
    return true;
}
function CloudFoundryWriteRoleRequestFromJSON(json) {
    return CloudFoundryWriteRoleRequestFromJSONTyped(json, false);
}
function CloudFoundryWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        boundApplicationIds: json['bound_application_ids'] == null ? undefined : json['bound_application_ids'],
        boundCidrs: json['bound_cidrs'] == null ? undefined : json['bound_cidrs'],
        boundInstanceIds: json['bound_instance_ids'] == null ? undefined : json['bound_instance_ids'],
        boundOrganizationIds: json['bound_organization_ids'] == null ? undefined : json['bound_organization_ids'],
        boundSpaceIds: json['bound_space_ids'] == null ? undefined : json['bound_space_ids'],
        disableIpMatching: json['disable_ip_matching'] == null ? undefined : json['disable_ip_matching'],
        maxTtl: json['max_ttl'] == null ? undefined : json['max_ttl'],
        period: json['period'] == null ? undefined : json['period'],
        policies: json['policies'] == null ? undefined : json['policies'],
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
    };
}
function CloudFoundryWriteRoleRequestToJSON(json) {
    return CloudFoundryWriteRoleRequestToJSONTyped(json, false);
}
function CloudFoundryWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        bound_application_ids: value['boundApplicationIds'],
        bound_cidrs: value['boundCidrs'],
        bound_instance_ids: value['boundInstanceIds'],
        bound_organization_ids: value['boundOrganizationIds'],
        bound_space_ids: value['boundSpaceIds'],
        disable_ip_matching: value['disableIpMatching'],
        max_ttl: value['maxTtl'],
        period: value['period'],
        policies: value['policies'],
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
    };
}
