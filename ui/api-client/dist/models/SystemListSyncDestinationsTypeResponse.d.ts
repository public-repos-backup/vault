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
 * @interface SystemListSyncDestinationsTypeResponse
 */
export interface SystemListSyncDestinationsTypeResponse {
    /**
     * List of destination types with at least one destination.
     * @type {Array<object>}
     * @memberof SystemListSyncDestinationsTypeResponse
     */
    keys?: Array<object>;
}
/**
 * Check if a given object implements the SystemListSyncDestinationsTypeResponse interface.
 */
export declare function instanceOfSystemListSyncDestinationsTypeResponse(value: object): value is SystemListSyncDestinationsTypeResponse;
export declare function SystemListSyncDestinationsTypeResponseFromJSON(json: any): SystemListSyncDestinationsTypeResponse;
export declare function SystemListSyncDestinationsTypeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemListSyncDestinationsTypeResponse;
export declare function SystemListSyncDestinationsTypeResponseToJSON(json: any): SystemListSyncDestinationsTypeResponse;
export declare function SystemListSyncDestinationsTypeResponseToJSONTyped(value?: SystemListSyncDestinationsTypeResponse | null, ignoreDiscriminator?: boolean): any;
