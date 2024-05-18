// @ts-nocheck

/**
 * @description Resolves the given DNS hostname into an IP address
 * @param host hostname to resolve.
 * @returns IP address in the dot-separated format as a string.
 */
declare function dnsResolve(host: string): string;

/**
 * @param ipaddr Any dotted address such as an IP address or mask.
 * @returns Concatenates the four dot-separated bytes into one 4-byte word and converts it to decimal.
 */
declare function convert_addr(ipaddr: string): number;

/**
 * @returns The server IP address of the machine Firefox is running on, as a string in the dot-separated integer format.It returns the same IP address as the server address returned by `nslookup localhost` on a Linux machine. It does not return the public IP address.
 */
declare function myIpAddress(): string;

/**
 * @param host The hostname from the URL.
 * @returns The number (integer) of DNS domain levels (number of dots) in the hostname.
 */
declare function dnsDomainLevels(host: string): number;
