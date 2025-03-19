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
 *
 * @export
 * @interface KvV2ReadSubkeysResponse
 */
export interface KvV2ReadSubkeysResponse {
    /**
     *
     * @type {object}
     * @memberof KvV2ReadSubkeysResponse
     */
    metadata?: object;
    /**
     *
     * @type {object}
     * @memberof KvV2ReadSubkeysResponse
     */
    subkeys?: object;
}
/**
 * Check if a given object implements the KvV2ReadSubkeysResponse interface.
 */
export declare function instanceOfKvV2ReadSubkeysResponse(value: object): value is KvV2ReadSubkeysResponse;
export declare function KvV2ReadSubkeysResponseFromJSON(json: any): KvV2ReadSubkeysResponse;
export declare function KvV2ReadSubkeysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KvV2ReadSubkeysResponse;
export declare function KvV2ReadSubkeysResponseToJSON(json: any): KvV2ReadSubkeysResponse;
export declare function KvV2ReadSubkeysResponseToJSONTyped(value?: KvV2ReadSubkeysResponse | null, ignoreDiscriminator?: boolean): any;
