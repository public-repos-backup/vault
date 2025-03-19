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
 * @interface PkiWriteIssuerIssuerRefAcmeRevokeCertRequest
 */
export interface PkiWriteIssuerIssuerRefAcmeRevokeCertRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeRevokeCertRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeRevokeCertRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeRevokeCertRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefAcmeRevokeCertRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefAcmeRevokeCertRequest(value: object): value is PkiWriteIssuerIssuerRefAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefAcmeRevokeCertRequestFromJSON(json: any): PkiWriteIssuerIssuerRefAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefAcmeRevokeCertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefAcmeRevokeCertRequestToJSON(json: any): PkiWriteIssuerIssuerRefAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefAcmeRevokeCertRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefAcmeRevokeCertRequest | null, ignoreDiscriminator?: boolean): any;
