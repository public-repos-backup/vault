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
 * @interface AppRoleWriteCustomSecretIdRequest
 */
export interface AppRoleWriteCustomSecretIdRequest {
    /**
     * Comma separated string or list of CIDR blocks enforcing secret IDs to be used from specific set of IP addresses. If 'bound_cidr_list' is set on the role, then the list of CIDR blocks listed here should be a subset of the CIDR blocks listed on the role.
     * @type {Array<string>}
     * @memberof AppRoleWriteCustomSecretIdRequest
     */
    cidrList?: Array<string>;
    /**
     * Metadata to be tied to the SecretID. This should be a JSON formatted string containing metadata in key value pairs.
     * @type {string}
     * @memberof AppRoleWriteCustomSecretIdRequest
     */
    metadata?: string;
    /**
     * Number of times this SecretID can be used, after which the SecretID expires. Overrides secret_id_num_uses role option when supplied. May not be higher than role's secret_id_num_uses.
     * @type {number}
     * @memberof AppRoleWriteCustomSecretIdRequest
     */
    numUses?: number;
    /**
     * SecretID to be attached to the role.
     * @type {string}
     * @memberof AppRoleWriteCustomSecretIdRequest
     */
    secretId?: string;
    /**
     * Comma separated string or list of CIDR blocks. If set, specifies the blocks of IP addresses which can use the returned token. Should be a subset of the token CIDR blocks listed on the role, if any.
     * @type {Array<string>}
     * @memberof AppRoleWriteCustomSecretIdRequest
     */
    tokenBoundCidrs?: Array<string>;
    /**
     * Duration in seconds after which this SecretID expires. Overrides secret_id_ttl role option when supplied. May not be longer than role's secret_id_ttl.
     * @type {string}
     * @memberof AppRoleWriteCustomSecretIdRequest
     */
    ttl?: string;
}
/**
 * Check if a given object implements the AppRoleWriteCustomSecretIdRequest interface.
 */
export declare function instanceOfAppRoleWriteCustomSecretIdRequest(value: object): value is AppRoleWriteCustomSecretIdRequest;
export declare function AppRoleWriteCustomSecretIdRequestFromJSON(json: any): AppRoleWriteCustomSecretIdRequest;
export declare function AppRoleWriteCustomSecretIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteCustomSecretIdRequest;
export declare function AppRoleWriteCustomSecretIdRequestToJSON(json: any): AppRoleWriteCustomSecretIdRequest;
export declare function AppRoleWriteCustomSecretIdRequestToJSONTyped(value?: AppRoleWriteCustomSecretIdRequest | null, ignoreDiscriminator?: boolean): any;
