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
 * @interface EntityUpdateByIdRequest
 */
export interface EntityUpdateByIdRequest {
    /**
     * If set true, tokens tied to this identity will not be able to be used (but will not be revoked).
     * @type {boolean}
     * @memberof EntityUpdateByIdRequest
     */
    disabled?: boolean;
    /**
     * Metadata to be associated with the entity. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
     * @type {object}
     * @memberof EntityUpdateByIdRequest
     */
    metadata?: object;
    /**
     * Name of the entity
     * @type {string}
     * @memberof EntityUpdateByIdRequest
     */
    name?: string;
    /**
     * Policies to be tied to the entity.
     * @type {Array<string>}
     * @memberof EntityUpdateByIdRequest
     */
    policies?: Array<string>;
}
/**
 * Check if a given object implements the EntityUpdateByIdRequest interface.
 */
export declare function instanceOfEntityUpdateByIdRequest(value: object): value is EntityUpdateByIdRequest;
export declare function EntityUpdateByIdRequestFromJSON(json: any): EntityUpdateByIdRequest;
export declare function EntityUpdateByIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityUpdateByIdRequest;
export declare function EntityUpdateByIdRequestToJSON(json: any): EntityUpdateByIdRequest;
export declare function EntityUpdateByIdRequestToJSONTyped(value?: EntityUpdateByIdRequest | null, ignoreDiscriminator?: boolean): any;
