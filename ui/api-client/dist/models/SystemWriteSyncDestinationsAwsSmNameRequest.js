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
exports.instanceOfSystemWriteSyncDestinationsAwsSmNameRequest = instanceOfSystemWriteSyncDestinationsAwsSmNameRequest;
exports.SystemWriteSyncDestinationsAwsSmNameRequestFromJSON = SystemWriteSyncDestinationsAwsSmNameRequestFromJSON;
exports.SystemWriteSyncDestinationsAwsSmNameRequestFromJSONTyped = SystemWriteSyncDestinationsAwsSmNameRequestFromJSONTyped;
exports.SystemWriteSyncDestinationsAwsSmNameRequestToJSON = SystemWriteSyncDestinationsAwsSmNameRequestToJSON;
exports.SystemWriteSyncDestinationsAwsSmNameRequestToJSONTyped = SystemWriteSyncDestinationsAwsSmNameRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteSyncDestinationsAwsSmNameRequest interface.
 */
function instanceOfSystemWriteSyncDestinationsAwsSmNameRequest(value) {
    return true;
}
function SystemWriteSyncDestinationsAwsSmNameRequestFromJSON(json) {
    return SystemWriteSyncDestinationsAwsSmNameRequestFromJSONTyped(json, false);
}
function SystemWriteSyncDestinationsAwsSmNameRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        accessKeyId: json['access_key_id'] == null ? undefined : json['access_key_id'],
        allowedIpv4Addresses: json['allowed_ipv4_addresses'] == null ? undefined : json['allowed_ipv4_addresses'],
        allowedIpv6Addresses: json['allowed_ipv6_addresses'] == null ? undefined : json['allowed_ipv6_addresses'],
        allowedPorts: json['allowed_ports'] == null ? undefined : json['allowed_ports'],
        customTags: json['custom_tags'] == null ? undefined : json['custom_tags'],
        disableStrictNetworking: json['disable_strict_networking'] == null ? undefined : json['disable_strict_networking'],
        externalId: json['external_id'] == null ? undefined : json['external_id'],
        granularity: json['granularity'] == null ? undefined : json['granularity'],
        purge: json['purge'] == null ? undefined : json['purge'],
        region: json['region'] == null ? undefined : json['region'],
        roleArn: json['role_arn'] == null ? undefined : json['role_arn'],
        secretAccessKey: json['secret_access_key'] == null ? undefined : json['secret_access_key'],
        secretNameTemplate: json['secret_name_template'] == null ? undefined : json['secret_name_template'],
        tagsToRemove: json['tags_to_remove'] == null ? undefined : json['tags_to_remove'],
    };
}
function SystemWriteSyncDestinationsAwsSmNameRequestToJSON(json) {
    return SystemWriteSyncDestinationsAwsSmNameRequestToJSONTyped(json, false);
}
function SystemWriteSyncDestinationsAwsSmNameRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        access_key_id: value['accessKeyId'],
        allowed_ipv4_addresses: value['allowedIpv4Addresses'],
        allowed_ipv6_addresses: value['allowedIpv6Addresses'],
        allowed_ports: value['allowedPorts'],
        custom_tags: value['customTags'],
        disable_strict_networking: value['disableStrictNetworking'],
        external_id: value['externalId'],
        granularity: value['granularity'],
        purge: value['purge'],
        region: value['region'],
        role_arn: value['roleArn'],
        secret_access_key: value['secretAccessKey'],
        secret_name_template: value['secretNameTemplate'],
        tags_to_remove: value['tagsToRemove'],
    };
}
