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
exports.instanceOfPkiReadCrlConfigurationResponse = instanceOfPkiReadCrlConfigurationResponse;
exports.PkiReadCrlConfigurationResponseFromJSON = PkiReadCrlConfigurationResponseFromJSON;
exports.PkiReadCrlConfigurationResponseFromJSONTyped = PkiReadCrlConfigurationResponseFromJSONTyped;
exports.PkiReadCrlConfigurationResponseToJSON = PkiReadCrlConfigurationResponseToJSON;
exports.PkiReadCrlConfigurationResponseToJSONTyped = PkiReadCrlConfigurationResponseToJSONTyped;
/**
 * Check if a given object implements the PkiReadCrlConfigurationResponse interface.
 */
function instanceOfPkiReadCrlConfigurationResponse(value) {
    return true;
}
function PkiReadCrlConfigurationResponseFromJSON(json) {
    return PkiReadCrlConfigurationResponseFromJSONTyped(json, false);
}
function PkiReadCrlConfigurationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        autoRebuild: json['auto_rebuild'] == null ? undefined : json['auto_rebuild'],
        autoRebuildGracePeriod: json['auto_rebuild_grace_period'] == null ? undefined : json['auto_rebuild_grace_period'],
        crossClusterRevocation: json['cross_cluster_revocation'] == null ? undefined : json['cross_cluster_revocation'],
        deltaRebuildInterval: json['delta_rebuild_interval'] == null ? undefined : json['delta_rebuild_interval'],
        disable: json['disable'] == null ? undefined : json['disable'],
        enableDelta: json['enable_delta'] == null ? undefined : json['enable_delta'],
        expiry: json['expiry'] == null ? undefined : json['expiry'],
        maxCrlEntries: json['max_crl_entries'] == null ? undefined : json['max_crl_entries'],
        ocspDisable: json['ocsp_disable'] == null ? undefined : json['ocsp_disable'],
        ocspExpiry: json['ocsp_expiry'] == null ? undefined : json['ocsp_expiry'],
        unifiedCrl: json['unified_crl'] == null ? undefined : json['unified_crl'],
        unifiedCrlOnExistingPaths: json['unified_crl_on_existing_paths'] == null ? undefined : json['unified_crl_on_existing_paths'],
    };
}
function PkiReadCrlConfigurationResponseToJSON(json) {
    return PkiReadCrlConfigurationResponseToJSONTyped(json, false);
}
function PkiReadCrlConfigurationResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        auto_rebuild: value['autoRebuild'],
        auto_rebuild_grace_period: value['autoRebuildGracePeriod'],
        cross_cluster_revocation: value['crossClusterRevocation'],
        delta_rebuild_interval: value['deltaRebuildInterval'],
        disable: value['disable'],
        enable_delta: value['enableDelta'],
        expiry: value['expiry'],
        max_crl_entries: value['maxCrlEntries'],
        ocsp_disable: value['ocspDisable'],
        ocsp_expiry: value['ocspExpiry'],
        unified_crl: value['unifiedCrl'],
        unified_crl_on_existing_paths: value['unifiedCrlOnExistingPaths'],
    };
}
