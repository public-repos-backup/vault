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
 * @interface PkiRotateCrlResponse
 */
export interface PkiRotateCrlResponse {
    /**
     * Whether rotation was successful
     * @type {boolean}
     * @memberof PkiRotateCrlResponse
     */
    success?: boolean;
}
/**
 * Check if a given object implements the PkiRotateCrlResponse interface.
 */
export declare function instanceOfPkiRotateCrlResponse(value: object): value is PkiRotateCrlResponse;
export declare function PkiRotateCrlResponseFromJSON(json: any): PkiRotateCrlResponse;
export declare function PkiRotateCrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiRotateCrlResponse;
export declare function PkiRotateCrlResponseToJSON(json: any): PkiRotateCrlResponse;
export declare function PkiRotateCrlResponseToJSONTyped(value?: PkiRotateCrlResponse | null, ignoreDiscriminator?: boolean): any;
