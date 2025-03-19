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
 * @interface PkiReadCertRawPemResponse
 */
export interface PkiReadCertRawPemResponse {
    /**
     * Issuing CA Chain
     * @type {string}
     * @memberof PkiReadCertRawPemResponse
     */
    caChain?: string;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiReadCertRawPemResponse
     */
    certificate?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCertRawPemResponse
     */
    issuerId?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiReadCertRawPemResponse
     */
    revocationTime?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCertRawPemResponse
     */
    revocationTimeRfc3339?: string;
}
/**
 * Check if a given object implements the PkiReadCertRawPemResponse interface.
 */
export declare function instanceOfPkiReadCertRawPemResponse(value: object): value is PkiReadCertRawPemResponse;
export declare function PkiReadCertRawPemResponseFromJSON(json: any): PkiReadCertRawPemResponse;
export declare function PkiReadCertRawPemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCertRawPemResponse;
export declare function PkiReadCertRawPemResponseToJSON(json: any): PkiReadCertRawPemResponse;
export declare function PkiReadCertRawPemResponseToJSONTyped(value?: PkiReadCertRawPemResponse | null, ignoreDiscriminator?: boolean): any;
