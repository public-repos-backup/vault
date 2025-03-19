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
exports.instanceOfMongoDbAtlasConfigureRequest = instanceOfMongoDbAtlasConfigureRequest;
exports.MongoDbAtlasConfigureRequestFromJSON = MongoDbAtlasConfigureRequestFromJSON;
exports.MongoDbAtlasConfigureRequestFromJSONTyped = MongoDbAtlasConfigureRequestFromJSONTyped;
exports.MongoDbAtlasConfigureRequestToJSON = MongoDbAtlasConfigureRequestToJSON;
exports.MongoDbAtlasConfigureRequestToJSONTyped = MongoDbAtlasConfigureRequestToJSONTyped;
/**
 * Check if a given object implements the MongoDbAtlasConfigureRequest interface.
 */
function instanceOfMongoDbAtlasConfigureRequest(value) {
    if (!('privateKey' in value) || value['privateKey'] === undefined)
        return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined)
        return false;
    return true;
}
function MongoDbAtlasConfigureRequestFromJSON(json) {
    return MongoDbAtlasConfigureRequestFromJSONTyped(json, false);
}
function MongoDbAtlasConfigureRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        privateKey: json['private_key'],
        publicKey: json['public_key'],
    };
}
function MongoDbAtlasConfigureRequestToJSON(json) {
    return MongoDbAtlasConfigureRequestToJSONTyped(json, false);
}
function MongoDbAtlasConfigureRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        private_key: value['privateKey'],
        public_key: value['publicKey'],
    };
}
