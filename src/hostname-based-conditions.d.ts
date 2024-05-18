// @ts-nocheck

/**
 * @param host The hostname from the URL (excluding port number).
 * @returns True if and only if there is no domain name in the hostname (no dots).
 */
declare function isPlainHostName(host: string): boolean;

/**
 * @param host The hostname from the URL.
 * @param domain The domain name to test the hostname against.
 * @returns True if and only if the domain of hostname matches.
 */
declare function dnsDomainIs(host: string, domain: string): boolean;

/**
 * @param host The hostname from the URL.
 * @param hostdom Fully qualified hostname to match against.
 * @returns True if the hostname matches exactly the specified hostname, or if there is no domain name part in the hostname, but the unqualified hostname matches.
 */
declare function localHostOrDomainIs(host: string, hostdom: string): boolean;

/**
 * @description Tries to resolve the hostname
 * @param host The hostname from the URL.
 * @returns True if succeeds.
 */
declare function isResolvable(host: string): boolean;

/**
 * @param host a DNS hostname, or IP address. If a hostname is passed, it will be resolved into an IP address by this function.
 * @param pattern an IP address pattern in the dot-separated format.
 * @param mask mask for the IP address pattern informing which parts of the IP address should be matched against. 0 means ignore, 255 means match.
 * @returns True if and only if the IP address of the host matches the specified IP address pattern.
 */
declare function isInNet(host: string, pattern: string, mask: string): boolean;
