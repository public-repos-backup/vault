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
 * @interface PkiIssuersGenerateIntermediateRequest
 */
export interface PkiIssuersGenerateIntermediateRequest {
    /**
     * Whether to add a Basic Constraints extension with CA: true. Only needed as a workaround in some compatibility scenarios with Active Directory Certificate Services.
     * @type {boolean}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    addBasicConstraints?: boolean;
    /**
     * The requested Subject Alternative Names, if any, in a comma-delimited list. May contain both DNS names and email addresses.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    altNames?: string;
    /**
     * The requested common name; if you want more than one, specify the alternative names in the alt_names map. If not specified when signing, the common name will be taken from the CSR; other names must still be specified in alt_names or ip_sans.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    commonName?: string;
    /**
     * If set, Country will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    country?: Array<string>;
    /**
     * If true, the Common Name will not be included in DNS or Email Subject Alternate Names. Defaults to false (CN is included).
     * @type {boolean}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    excludeCnFromSans?: boolean;
    /**
     * Format for returned data. Can be "pem", "der", or "pem_bundle". If "pem_bundle", any private key and issuing cert will be appended to the certificate pem. If "der", the value will be base64 encoded. Defaults to "pem".
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    format?: PkiIssuersGenerateIntermediateRequestFormatEnum;
    /**
     * The requested IP SANs, if any, in a comma-delimited list
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    ipSans?: Array<string>;
    /**
     * The number of bits to use. Allowed values are 0 (universal default); with rsa key_type: 2048 (default), 3072, 4096 or 8192; with ec key_type: 224, 256 (default), 384, or 521; ignored with ed25519.
     * @type {number}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    keyBits?: number;
    /**
     * Provide a name to the generated or existing key, the name must be unique across all keys and not be the reserved value 'default'
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    keyName?: string;
    /**
     * Reference to a existing key; either "default" for the configured default key, an identifier or the name assigned to the key.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    keyRef?: string;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    keyType?: PkiIssuersGenerateIntermediateRequestKeyTypeEnum;
    /**
     * Specifies key_usage to encode in the certificate signing request. This is a comma-separated string or list of key usages (not extended key usages). Valid values can be found at https://golang.org/pkg/crypto/x509/#KeyUsage -- simply drop the "KeyUsage" part of the name. If not set, key usage will not appear on the CSR.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    keyUsage?: Array<string>;
    /**
     * If set, Locality will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    locality?: Array<string>;
    /**
     * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_name is required. Ignored for other types.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    managedKeyId?: string;
    /**
     * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_id is required. Ignored for other types.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    managedKeyName?: string;
    /**
     * Set the not after field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    notAfter?: string;
    /**
     * The duration before now which the certificate needs to be backdated by.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    notBeforeDuration?: string;
    /**
     * If set, O (Organization) will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    organization?: Array<string>;
    /**
     * Requested other SANs, in an array with the format <oid>;UTF8:<utf8 string value> for each entry.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    otherSans?: Array<string>;
    /**
     * If set, OU (OrganizationalUnit) will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    ou?: Array<string>;
    /**
     * If set, Postal Code will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    postalCode?: Array<string>;
    /**
     * Format for the returned private key. Generally the default will be controlled by the "format" parameter as either base64-encoded DER or PEM-encoded DER. However, this can be set to "pkcs8" to have the returned private key contain base64-encoded pkcs8 or PEM-encoded pkcs8 instead. Defaults to "der".
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    privateKeyFormat?: PkiIssuersGenerateIntermediateRequestPrivateKeyFormatEnum;
    /**
     * If set, Province will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    province?: Array<string>;
    /**
     * The Subject's requested serial number, if any. See RFC 4519 Section 2.31 'serialNumber' for a description of this field. If you want more than one, specify alternative names in the alt_names map using OID 2.5.4.5. This has no impact on the final certificate's Serial Number field.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    serialNumber?: string;
    /**
     * The number of bits to use in the signature algorithm; accepts 256 for SHA-2-256, 384 for SHA-2-384, and 512 for SHA-2-512. Defaults to 0 to automatically detect based on key length (SHA-2-256 for RSA keys, and matching the curve size for NIST P-Curves).
     * @type {number}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    signatureBits?: number;
    /**
     * If set, Street Address will be set to this value.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    streetAddress?: Array<string>;
    /**
     * The requested Time To Live for the certificate; sets the expiration date. If not specified the role default, backend default, or system default TTL is used, in that order. Cannot be larger than the mount max TTL. Note: this only has an effect when generating a CA cert or signing a CA cert, not when generating a CSR for an intermediate CA.
     * @type {string}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    ttl?: string;
    /**
     * The requested URI SANs, if any, in a comma-delimited list.
     * @type {Array<string>}
     * @memberof PkiIssuersGenerateIntermediateRequest
     */
    uriSans?: Array<string>;
}
/**
 * @export
 * @enum {string}
 */
export declare enum PkiIssuersGenerateIntermediateRequestFormatEnum {
    PEM = "pem",
    DER = "der",
    PEM_BUNDLE = "pem_bundle"
}
/**
 * @export
 * @enum {string}
 */
export declare enum PkiIssuersGenerateIntermediateRequestKeyTypeEnum {
    RSA = "rsa",
    EC = "ec",
    ED25519 = "ed25519"
}
/**
 * @export
 * @enum {string}
 */
export declare enum PkiIssuersGenerateIntermediateRequestPrivateKeyFormatEnum {
    EMPTY = "",
    DER = "der",
    PEM = "pem",
    PKCS8 = "pkcs8"
}
/**
 * Check if a given object implements the PkiIssuersGenerateIntermediateRequest interface.
 */
export declare function instanceOfPkiIssuersGenerateIntermediateRequest(value: object): value is PkiIssuersGenerateIntermediateRequest;
export declare function PkiIssuersGenerateIntermediateRequestFromJSON(json: any): PkiIssuersGenerateIntermediateRequest;
export declare function PkiIssuersGenerateIntermediateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiIssuersGenerateIntermediateRequest;
export declare function PkiIssuersGenerateIntermediateRequestToJSON(json: any): PkiIssuersGenerateIntermediateRequest;
export declare function PkiIssuersGenerateIntermediateRequestToJSONTyped(value?: PkiIssuersGenerateIntermediateRequest | null, ignoreDiscriminator?: boolean): any;
