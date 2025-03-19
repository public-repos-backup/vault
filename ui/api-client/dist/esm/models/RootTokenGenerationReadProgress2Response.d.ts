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
 * @interface RootTokenGenerationReadProgress2Response
 */
export interface RootTokenGenerationReadProgress2Response {
    /**
     *
     * @type {boolean}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    complete?: boolean;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    encodedRootToken?: string;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    encodedToken?: string;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    nonce?: string;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    otp?: string;
    /**
     *
     * @type {number}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    otpLength?: number;
    /**
     *
     * @type {string}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    pgpFingerprint?: string;
    /**
     *
     * @type {number}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    progress?: number;
    /**
     *
     * @type {number}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    required?: number;
    /**
     *
     * @type {boolean}
     * @memberof RootTokenGenerationReadProgress2Response
     */
    started?: boolean;
}
/**
 * Check if a given object implements the RootTokenGenerationReadProgress2Response interface.
 */
export declare function instanceOfRootTokenGenerationReadProgress2Response(value: object): value is RootTokenGenerationReadProgress2Response;
export declare function RootTokenGenerationReadProgress2ResponseFromJSON(json: any): RootTokenGenerationReadProgress2Response;
export declare function RootTokenGenerationReadProgress2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootTokenGenerationReadProgress2Response;
export declare function RootTokenGenerationReadProgress2ResponseToJSON(json: any): RootTokenGenerationReadProgress2Response;
export declare function RootTokenGenerationReadProgress2ResponseToJSONTyped(value?: RootTokenGenerationReadProgress2Response | null, ignoreDiscriminator?: boolean): any;
