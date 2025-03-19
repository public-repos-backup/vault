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
 * Check if a given object implements the AzureLoginRequest interface.
 */
export function instanceOfAzureLoginRequest(value) {
    return true;
}
export function AzureLoginRequestFromJSON(json) {
    return AzureLoginRequestFromJSONTyped(json, false);
}
export function AzureLoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        jwt: json['jwt'] == null ? undefined : json['jwt'],
        resourceGroupName: json['resource_group_name'] == null ? undefined : json['resource_group_name'],
        resourceId: json['resource_id'] == null ? undefined : json['resource_id'],
        role: json['role'] == null ? undefined : json['role'],
        subscriptionId: json['subscription_id'] == null ? undefined : json['subscription_id'],
        vmName: json['vm_name'] == null ? undefined : json['vm_name'],
        vmssName: json['vmss_name'] == null ? undefined : json['vmss_name'],
    };
}
export function AzureLoginRequestToJSON(json) {
    return AzureLoginRequestToJSONTyped(json, false);
}
export function AzureLoginRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        jwt: value['jwt'],
        resource_group_name: value['resourceGroupName'],
        resource_id: value['resourceId'],
        role: value['role'],
        subscription_id: value['subscriptionId'],
        vm_name: value['vmName'],
        vmss_name: value['vmssName'],
    };
}
