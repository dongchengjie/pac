/// <reference path="./pac.d.ts" />

isPlainHostName("www.mozilla.org"); // false
isPlainHostName("www"); // true

dnsDomainIs("www.mozilla.org", ".mozilla.org"); // true
dnsDomainIs("www", ".mozilla.org"); // false

localHostOrDomainIs("www.mozilla.org", "www.mozilla.org"); // true (exact match)
localHostOrDomainIs("www", "www.mozilla.org"); // true (hostname match, domain not specified)
localHostOrDomainIs("www.google.com", "www.mozilla.org"); // false (domain name mismatch)
localHostOrDomainIs("home.mozilla.org", "www.mozilla.org"); // false (hostname mismatch)

isResolvable("www.mozilla.org"); // true

function FindProxyForURL(url: string, host: string) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mozilla.org")) {
    return "DIRECT";
  } else {
    return "PROXY w3proxy.mozilla.org:8080; DIRECT";
  }
}

dnsResolve("www.mozilla.org"); // returns the string "104.16.41.2"

convert_addr("192.0.2.172"); // returns the decimal number 1745889538

myIpAddress(); //returns the string "127.0.1.1" if you were running Firefox on that localhost

dnsDomainLevels("www"); // 0
dnsDomainLevels("mozilla.org"); // 1
dnsDomainLevels("www.mozilla.org"); // 2

shExpMatch("http://home.netscape.com/people/ari/index.html", "*/ari/*"); // returns true
shExpMatch("http://home.netscape.com/people/montulli/index.html", "*/ari/*"); // returns false

weekdayRange("MON", "FRI"); // returns true Monday through Friday (local timezone)
weekdayRange("MON", "FRI", "GMT"); // returns true Monday through Friday (GMT timezone)
weekdayRange("SAT"); // returns true on Saturdays local time
weekdayRange("SAT", "GMT"); // returns true on Saturdays GMT time
weekdayRange("FRI", "MON"); // returns true Friday and Monday only (note, the order does matter!)

dateRange(1); // returns true on the first day of each month, local timezone
dateRange(1, "GMT"); // returns true on the first day of each month, GMT timezone
dateRange(1, 15); // returns true on the first half of each month
dateRange(24, "DEC"); // returns true on 24th of December each year
dateRange("JAN", "MAR"); // returns true on the first quarter of the year

dateRange(1, "JUN", 15, "AUG");
// returns true from June 1st until August 15th, each year
// (including June 1st and August 15th)

dateRange(1, "JUN", 1995, 15, "AUG", 1995);
// returns true from June 1st, 1995, until August 15th, same year

dateRange("OCT", 1995, "MAR", 1996);
// returns true from October 1995 until March 1996
// (including the entire month of October 1995 and March 1996)

dateRange(1995);
// returns true during the entire year of 1995

dateRange(1995, 1997);
// returns true from beginning of year 1995 until the end of year 1997

timerange(12); // returns true from noon to 1pm
timerange(12, 13); // returns true from noon to 1pm
timerange(12, "GMT"); // returns true from noon to 1pm, in the GMT timezone
timerange(9, 17); // returns true from 9am to 5pm
timerange(8, 30, 17, 0); // returns true from 8:30am to 5:00pm
timerange(0, 0, 0, 0, 0, 30); // returns true between midnight and 30 seconds past midnight

const host = "www.mozilla.org";
alert(`${host} = ${dnsResolve(host)}`); // logs the host name and its IP address
alert("Error: shouldn't reach this clause."); // log a simple message
