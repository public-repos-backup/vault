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
 * @interface KubernetesWriteAuthRoleRequest
 */
export interface KubernetesWriteAuthRoleRequest {
    /**
     * Source to use when deriving the Alias name. valid choices: "serviceaccount_uid" : <token.uid> e.g. 474b11b5-0f20-4f9d-8ca5-65715ab325e0 (most secure choice) "serviceaccount_name" : <namespace>/<serviceaccount> e.g. vault/vault-agent default: "serviceaccount_uid"
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    aliasNameSource?: string;
    /**
     * Optional Audience claim to verify in the jwt.
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    audience?: string;
    /**
     * Use "token_bound_cidrs" instead. If this and "token_bound_cidrs" are both specified, only "token_bound_cidrs" will be used.
     * @type {Array<string>}
     * @memberof KubernetesWriteAuthRoleRequest
     * @deprecated
     */
    boundCidrs?: Array<string>;
    /**
     * List of service account names able to access this role. If set to "*" all names are allowed.
     * @type {Array<string>}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    boundServiceAccountNames?: Array<string>;
    /**
     * A label selector for Kubernetes namespaces which are allowed to access this role. Accepts either a JSON or YAML object. If set with bound_service_account_namespaces, the conditions are ORed.
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    boundServiceAccountNamespaceSelector?: string;
    /**
     * List of namespaces allowed to access this role. If set to "*" all namespaces are allowed.
     * @type {Array<string>}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    boundServiceAccountNamespaces?: Array<string>;
    /**
     * Use "token_max_ttl" instead. If this and "token_max_ttl" are both specified, only "token_max_ttl" will be used.
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     * @deprecated
     */
    maxTtl?: string;
    /**
     * Use "token_num_uses" instead. If this and "token_num_uses" are both specified, only "token_num_uses" will be used.
     * @type {number}
     * @memberof KubernetesWriteAuthRoleRequest
     * @deprecated
     */
    numUses?: number;
    /**
     * Use "token_period" instead. If this and "token_period" are both specified, only "token_period" will be used.
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     * @deprecated
     */
    period?: string;
    /**
     * Use "token_policies" instead. If this and "token_policies" are both specified, only "token_policies" will be used.
     * @type {Array<string>}
     * @memberof KubernetesWriteAuthRoleRequest
     * @deprecated
     */
    policies?: Array<string>;
    /**
     * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
     * @type {Array<string>}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenBoundCidrs?: Array<string>;
    /**
     * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenExplicitMaxTtl?: string;
    /**
     * The maximum lifetime of the generated token
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenMaxTtl?: string;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     * @type {boolean}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenNoDefaultPolicy?: boolean;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     * @type {number}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenNumUses?: number;
    /**
     * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenPeriod?: string;
    /**
     * Comma-separated list of policies
     * @type {Array<string>}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenPolicies?: Array<string>;
    /**
     * The initial ttl of the token to generate
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenTtl?: string;
    /**
     * The type of token to generate, service or batch
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     */
    tokenType?: string;
    /**
     * Use "token_ttl" instead. If this and "token_ttl" are both specified, only "token_ttl" will be used.
     * @type {string}
     * @memberof KubernetesWriteAuthRoleRequest
     * @deprecated
     */
    ttl?: string;
}
/**
 * Check if a given object implements the KubernetesWriteAuthRoleRequest interface.
 */
export declare function instanceOfKubernetesWriteAuthRoleRequest(value: object): value is KubernetesWriteAuthRoleRequest;
export declare function KubernetesWriteAuthRoleRequestFromJSON(json: any): KubernetesWriteAuthRoleRequest;
export declare function KubernetesWriteAuthRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KubernetesWriteAuthRoleRequest;
export declare function KubernetesWriteAuthRoleRequestToJSON(json: any): KubernetesWriteAuthRoleRequest;
export declare function KubernetesWriteAuthRoleRequestToJSONTyped(value?: KubernetesWriteAuthRoleRequest | null, ignoreDiscriminator?: boolean): any;
