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
 * @interface PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest
 */
export interface PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest(value: object): value is PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest;
export declare function PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequestFromJSON(json: any): PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest;
export declare function PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest;
export declare function PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequestToJSON(json: any): PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest;
export declare function PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefAcmeOrderOrderIdRequest | null, ignoreDiscriminator?: boolean): any;
