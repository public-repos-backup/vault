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
exports.instanceOfSystemWriteSyncDestinationsAzureKvNameResponse = instanceOfSystemWriteSyncDestinationsAzureKvNameResponse;
exports.SystemWriteSyncDestinationsAzureKvNameResponseFromJSON = SystemWriteSyncDestinationsAzureKvNameResponseFromJSON;
exports.SystemWriteSyncDestinationsAzureKvNameResponseFromJSONTyped = SystemWriteSyncDestinationsAzureKvNameResponseFromJSONTyped;
exports.SystemWriteSyncDestinationsAzureKvNameResponseToJSON = SystemWriteSyncDestinationsAzureKvNameResponseToJSON;
exports.SystemWriteSyncDestinationsAzureKvNameResponseToJSONTyped = SystemWriteSyncDestinationsAzureKvNameResponseToJSONTyped;
/**
 * Check if a given object implements the SystemWriteSyncDestinationsAzureKvNameResponse interface.
 */
function instanceOfSystemWriteSyncDestinationsAzureKvNameResponse(value) {
    return true;
}
function SystemWriteSyncDestinationsAzureKvNameResponseFromJSON(json) {
    return SystemWriteSyncDestinationsAzureKvNameResponseFromJSONTyped(json, false);
}
function SystemWriteSyncDestinationsAzureKvNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        connectionDetails: json['connection_details'] == null ? undefined : json['connection_details'],
        name: json['name'] == null ? undefined : json['name'],
        type: json['type'] == null ? undefined : json['type'],
    };
}
function SystemWriteSyncDestinationsAzureKvNameResponseToJSON(json) {
    return SystemWriteSyncDestinationsAzureKvNameResponseToJSONTyped(json, false);
}
function SystemWriteSyncDestinationsAzureKvNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        connection_details: value['connectionDetails'],
        name: value['name'],
        type: value['type'],
    };
}
