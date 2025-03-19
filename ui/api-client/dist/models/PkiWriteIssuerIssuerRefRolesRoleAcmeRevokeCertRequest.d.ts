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
 * @interface PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest
 */
export interface PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest(value: object): value is PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequestFromJSON(json: any): PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequestToJSON(json: any): PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest;
export declare function PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefRolesRoleAcmeRevokeCertRequest | null, ignoreDiscriminator?: boolean): any;
