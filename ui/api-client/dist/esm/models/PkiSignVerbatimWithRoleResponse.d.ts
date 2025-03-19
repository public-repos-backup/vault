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
 * @interface PkiSignVerbatimWithRoleResponse
 */
export interface PkiSignVerbatimWithRoleResponse {
    /**
     * Certificate Chain
     * @type {Array<string>}
     * @memberof PkiSignVerbatimWithRoleResponse
     */
    caChain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiSignVerbatimWithRoleResponse
     */
    certificate?: string;
    /**
     * Time of expiration
     * @type {number}
     * @memberof PkiSignVerbatimWithRoleResponse
     */
    expiration?: number;
    /**
     * Issuing Certificate Authority
     * @type {string}
     * @memberof PkiSignVerbatimWithRoleResponse
     */
    issuingCa?: string;
    /**
     * Serial Number
     * @type {string}
     * @memberof PkiSignVerbatimWithRoleResponse
     */
    serialNumber?: string;
}
/**
 * Check if a given object implements the PkiSignVerbatimWithRoleResponse interface.
 */
export declare function instanceOfPkiSignVerbatimWithRoleResponse(value: object): value is PkiSignVerbatimWithRoleResponse;
export declare function PkiSignVerbatimWithRoleResponseFromJSON(json: any): PkiSignVerbatimWithRoleResponse;
export declare function PkiSignVerbatimWithRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiSignVerbatimWithRoleResponse;
export declare function PkiSignVerbatimWithRoleResponseToJSON(json: any): PkiSignVerbatimWithRoleResponse;
export declare function PkiSignVerbatimWithRoleResponseToJSONTyped(value?: PkiSignVerbatimWithRoleResponse | null, ignoreDiscriminator?: boolean): any;
