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
 * @interface PkiIssuerReadCrlDeltaPemResponse
 */
export interface PkiIssuerReadCrlDeltaPemResponse {
    /**
     *
     * @type {string}
     * @memberof PkiIssuerReadCrlDeltaPemResponse
     */
    crl?: string;
}
/**
 * Check if a given object implements the PkiIssuerReadCrlDeltaPemResponse interface.
 */
export declare function instanceOfPkiIssuerReadCrlDeltaPemResponse(value: object): value is PkiIssuerReadCrlDeltaPemResponse;
export declare function PkiIssuerReadCrlDeltaPemResponseFromJSON(json: any): PkiIssuerReadCrlDeltaPemResponse;
export declare function PkiIssuerReadCrlDeltaPemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiIssuerReadCrlDeltaPemResponse;
export declare function PkiIssuerReadCrlDeltaPemResponseToJSON(json: any): PkiIssuerReadCrlDeltaPemResponse;
export declare function PkiIssuerReadCrlDeltaPemResponseToJSONTyped(value?: PkiIssuerReadCrlDeltaPemResponse | null, ignoreDiscriminator?: boolean): any;
