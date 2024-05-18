// @ts-nocheck

/**
 *
 * @param str Any string to compare (e.g. the URL, or the hostname).
 * @param shexp A shell expression to compare against.
 * @returns True if the string matches the specified shell glob expression.
 */
declare function shExpMatch(str: string, shexp: string): boolean;
