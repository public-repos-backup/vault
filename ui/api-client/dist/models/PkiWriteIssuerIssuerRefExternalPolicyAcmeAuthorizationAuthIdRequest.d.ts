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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyAcmeAuthorizationAuthIdRequest | null, ignoreDiscriminator?: boolean): any;
