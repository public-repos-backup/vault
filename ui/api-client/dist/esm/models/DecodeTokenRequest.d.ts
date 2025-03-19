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
 * @interface DecodeTokenRequest
 */
export interface DecodeTokenRequest {
    /**
     * Specifies the encoded token (result from generate-root).
     * @type {string}
     * @memberof DecodeTokenRequest
     */
    encodedToken?: string;
    /**
     * Specifies the otp code for decode.
     * @type {string}
     * @memberof DecodeTokenRequest
     */
    otp?: string;
}
/**
 * Check if a given object implements the DecodeTokenRequest interface.
 */
export declare function instanceOfDecodeTokenRequest(value: object): value is DecodeTokenRequest;
export declare function DecodeTokenRequestFromJSON(json: any): DecodeTokenRequest;
export declare function DecodeTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecodeTokenRequest;
export declare function DecodeTokenRequestToJSON(json: any): DecodeTokenRequest;
export declare function DecodeTokenRequestToJSONTyped(value?: DecodeTokenRequest | null, ignoreDiscriminator?: boolean): any;
