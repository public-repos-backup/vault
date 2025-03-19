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
 * Check if a given object implements the InternalUiReadResultantAclResponse interface.
 */
export function instanceOfInternalUiReadResultantAclResponse(value) {
    return true;
}
export function InternalUiReadResultantAclResponseFromJSON(json) {
    return InternalUiReadResultantAclResponseFromJSONTyped(json, false);
}
export function InternalUiReadResultantAclResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        chrootNamespace: json['chroot_namespace'] == null ? undefined : json['chroot_namespace'],
        exactPaths: json['exact_paths'] == null ? undefined : json['exact_paths'],
        globPaths: json['glob_paths'] == null ? undefined : json['glob_paths'],
        root: json['root'] == null ? undefined : json['root'],
    };
}
export function InternalUiReadResultantAclResponseToJSON(json) {
    return InternalUiReadResultantAclResponseToJSONTyped(json, false);
}
export function InternalUiReadResultantAclResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        chroot_namespace: value['chrootNamespace'],
        exact_paths: value['exactPaths'],
        glob_paths: value['globPaths'],
        root: value['root'],
    };
}
