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
exports.instanceOfAwsWriteRoleRequest = instanceOfAwsWriteRoleRequest;
exports.AwsWriteRoleRequestFromJSON = AwsWriteRoleRequestFromJSON;
exports.AwsWriteRoleRequestFromJSONTyped = AwsWriteRoleRequestFromJSONTyped;
exports.AwsWriteRoleRequestToJSON = AwsWriteRoleRequestToJSON;
exports.AwsWriteRoleRequestToJSONTyped = AwsWriteRoleRequestToJSONTyped;
/**
 * Check if a given object implements the AwsWriteRoleRequest interface.
 */
function instanceOfAwsWriteRoleRequest(value) {
    return true;
}
function AwsWriteRoleRequestFromJSON(json) {
    return AwsWriteRoleRequestFromJSONTyped(json, false);
}
function AwsWriteRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        arn: json['arn'] == null ? undefined : json['arn'],
        credentialType: json['credential_type'] == null ? undefined : json['credential_type'],
        defaultStsTtl: json['default_sts_ttl'] == null ? undefined : json['default_sts_ttl'],
        externalId: json['external_id'] == null ? undefined : json['external_id'],
        iamGroups: json['iam_groups'] == null ? undefined : json['iam_groups'],
        iamTags: json['iam_tags'] == null ? undefined : json['iam_tags'],
        maxStsTtl: json['max_sts_ttl'] == null ? undefined : json['max_sts_ttl'],
        mfaSerialNumber: json['mfa_serial_number'] == null ? undefined : json['mfa_serial_number'],
        permissionsBoundaryArn: json['permissions_boundary_arn'] == null ? undefined : json['permissions_boundary_arn'],
        policy: json['policy'] == null ? undefined : json['policy'],
        policyArns: json['policy_arns'] == null ? undefined : json['policy_arns'],
        policyDocument: json['policy_document'] == null ? undefined : json['policy_document'],
        roleArns: json['role_arns'] == null ? undefined : json['role_arns'],
        sessionTags: json['session_tags'] == null ? undefined : json['session_tags'],
        userPath: json['user_path'] == null ? undefined : json['user_path'],
    };
}
function AwsWriteRoleRequestToJSON(json) {
    return AwsWriteRoleRequestToJSONTyped(json, false);
}
function AwsWriteRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        arn: value['arn'],
        credential_type: value['credentialType'],
        default_sts_ttl: value['defaultStsTtl'],
        external_id: value['externalId'],
        iam_groups: value['iamGroups'],
        iam_tags: value['iamTags'],
        max_sts_ttl: value['maxStsTtl'],
        mfa_serial_number: value['mfaSerialNumber'],
        permissions_boundary_arn: value['permissionsBoundaryArn'],
        policy: value['policy'],
        policy_arns: value['policyArns'],
        policy_document: value['policyDocument'],
        role_arns: value['roleArns'],
        session_tags: value['sessionTags'],
        user_path: value['userPath'],
    };
}
