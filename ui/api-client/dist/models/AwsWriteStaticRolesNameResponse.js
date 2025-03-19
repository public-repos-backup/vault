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
exports.instanceOfAwsWriteStaticRolesNameResponse = instanceOfAwsWriteStaticRolesNameResponse;
exports.AwsWriteStaticRolesNameResponseFromJSON = AwsWriteStaticRolesNameResponseFromJSON;
exports.AwsWriteStaticRolesNameResponseFromJSONTyped = AwsWriteStaticRolesNameResponseFromJSONTyped;
exports.AwsWriteStaticRolesNameResponseToJSON = AwsWriteStaticRolesNameResponseToJSON;
exports.AwsWriteStaticRolesNameResponseToJSONTyped = AwsWriteStaticRolesNameResponseToJSONTyped;
/**
 * Check if a given object implements the AwsWriteStaticRolesNameResponse interface.
 */
function instanceOfAwsWriteStaticRolesNameResponse(value) {
    return true;
}
function AwsWriteStaticRolesNameResponseFromJSON(json) {
    return AwsWriteStaticRolesNameResponseFromJSONTyped(json, false);
}
function AwsWriteStaticRolesNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        assumeRoleArn: json['assume_role_arn'] == null ? undefined : json['assume_role_arn'],
        assumeRoleSessionName: json['assume_role_session_name'] == null ? undefined : json['assume_role_session_name'],
        externalId: json['external_id'] == null ? undefined : json['external_id'],
        name: json['name'] == null ? undefined : json['name'],
        rotationPeriod: json['rotation_period'] == null ? undefined : json['rotation_period'],
        username: json['username'] == null ? undefined : json['username'],
    };
}
function AwsWriteStaticRolesNameResponseToJSON(json) {
    return AwsWriteStaticRolesNameResponseToJSONTyped(json, false);
}
function AwsWriteStaticRolesNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        assume_role_arn: value['assumeRoleArn'],
        assume_role_session_name: value['assumeRoleSessionName'],
        external_id: value['externalId'],
        name: value['name'],
        rotation_period: value['rotationPeriod'],
        username: value['username'],
    };
}
