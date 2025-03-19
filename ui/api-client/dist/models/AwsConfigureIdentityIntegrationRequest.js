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
exports.instanceOfAwsConfigureIdentityIntegrationRequest = instanceOfAwsConfigureIdentityIntegrationRequest;
exports.AwsConfigureIdentityIntegrationRequestFromJSON = AwsConfigureIdentityIntegrationRequestFromJSON;
exports.AwsConfigureIdentityIntegrationRequestFromJSONTyped = AwsConfigureIdentityIntegrationRequestFromJSONTyped;
exports.AwsConfigureIdentityIntegrationRequestToJSON = AwsConfigureIdentityIntegrationRequestToJSON;
exports.AwsConfigureIdentityIntegrationRequestToJSONTyped = AwsConfigureIdentityIntegrationRequestToJSONTyped;
/**
 * Check if a given object implements the AwsConfigureIdentityIntegrationRequest interface.
 */
function instanceOfAwsConfigureIdentityIntegrationRequest(value) {
    return true;
}
function AwsConfigureIdentityIntegrationRequestFromJSON(json) {
    return AwsConfigureIdentityIntegrationRequestFromJSONTyped(json, false);
}
function AwsConfigureIdentityIntegrationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        ec2Alias: json['ec2_alias'] == null ? undefined : json['ec2_alias'],
        ec2Metadata: json['ec2_metadata'] == null ? undefined : json['ec2_metadata'],
        iamAlias: json['iam_alias'] == null ? undefined : json['iam_alias'],
        iamMetadata: json['iam_metadata'] == null ? undefined : json['iam_metadata'],
    };
}
function AwsConfigureIdentityIntegrationRequestToJSON(json) {
    return AwsConfigureIdentityIntegrationRequestToJSONTyped(json, false);
}
function AwsConfigureIdentityIntegrationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        ec2_alias: value['ec2Alias'],
        ec2_metadata: value['ec2Metadata'],
        iam_alias: value['iamAlias'],
        iam_metadata: value['iamMetadata'],
    };
}
