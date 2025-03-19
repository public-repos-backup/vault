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
 * @interface PkiReadCertUnifiedCrlResponse
 */
export interface PkiReadCertUnifiedCrlResponse {
    /**
     * Issuing CA Chain
     * @type {string}
     * @memberof PkiReadCertUnifiedCrlResponse
     */
    caChain?: string;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiReadCertUnifiedCrlResponse
     */
    certificate?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCertUnifiedCrlResponse
     */
    issuerId?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiReadCertUnifiedCrlResponse
     */
    revocationTime?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCertUnifiedCrlResponse
     */
    revocationTimeRfc3339?: string;
}
/**
 * Check if a given object implements the PkiReadCertUnifiedCrlResponse interface.
 */
export declare function instanceOfPkiReadCertUnifiedCrlResponse(value: object): value is PkiReadCertUnifiedCrlResponse;
export declare function PkiReadCertUnifiedCrlResponseFromJSON(json: any): PkiReadCertUnifiedCrlResponse;
export declare function PkiReadCertUnifiedCrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCertUnifiedCrlResponse;
export declare function PkiReadCertUnifiedCrlResponseToJSON(json: any): PkiReadCertUnifiedCrlResponse;
export declare function PkiReadCertUnifiedCrlResponseToJSONTyped(value?: PkiReadCertUnifiedCrlResponse | null, ignoreDiscriminator?: boolean): any;
