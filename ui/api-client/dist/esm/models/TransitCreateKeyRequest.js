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
/**
 * Check if a given object implements the TransitCreateKeyRequest interface.
 */
export function instanceOfTransitCreateKeyRequest(value) {
    return true;
}
export function TransitCreateKeyRequestFromJSON(json) {
    return TransitCreateKeyRequestFromJSONTyped(json, false);
}
export function TransitCreateKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        allowPlaintextBackup: json['allow_plaintext_backup'] == null ? undefined : json['allow_plaintext_backup'],
        autoRotatePeriod: json['auto_rotate_period'] == null ? undefined : json['auto_rotate_period'],
        context: json['context'] == null ? undefined : json['context'],
        convergentEncryption: json['convergent_encryption'] == null ? undefined : json['convergent_encryption'],
        derived: json['derived'] == null ? undefined : json['derived'],
        exportable: json['exportable'] == null ? undefined : json['exportable'],
        hybridKeyTypeEc: json['hybrid_key_type_ec'] == null ? undefined : json['hybrid_key_type_ec'],
        hybridKeyTypePqc: json['hybrid_key_type_pqc'] == null ? undefined : json['hybrid_key_type_pqc'],
        keySize: json['key_size'] == null ? undefined : json['key_size'],
        managedKeyId: json['managed_key_id'] == null ? undefined : json['managed_key_id'],
        managedKeyName: json['managed_key_name'] == null ? undefined : json['managed_key_name'],
        parameterSet: json['parameter_set'] == null ? undefined : json['parameter_set'],
        type: json['type'] == null ? undefined : json['type'],
    };
}
export function TransitCreateKeyRequestToJSON(json) {
    return TransitCreateKeyRequestToJSONTyped(json, false);
}
export function TransitCreateKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        allow_plaintext_backup: value['allowPlaintextBackup'],
        auto_rotate_period: value['autoRotatePeriod'],
        context: value['context'],
        convergent_encryption: value['convergentEncryption'],
        derived: value['derived'],
        exportable: value['exportable'],
        hybrid_key_type_ec: value['hybridKeyTypeEc'],
        hybrid_key_type_pqc: value['hybridKeyTypePqc'],
        key_size: value['keySize'],
        managed_key_id: value['managedKeyId'],
        managed_key_name: value['managedKeyName'],
        parameter_set: value['parameterSet'],
        type: value['type'],
    };
}
