// ==UserScript==
// @name           ebookeeTools
// @namespace      http://org.codeexample.jefferyyuan/userscripts
// @run-at document-start
// @include        *ebookee.net*
// @include        *ebookee.org*
// ==/UserScript==

var origianlUrl = window.location.href;
var startIndex = -1;

var match = origianlUrl.match(/\S*ebookee.org\/go\/\?u=/);

if (match == null) {
	match = origianlUrl.match(/\S*ebookee.net\/go\/\?u=/);
}


if (match != null && match[0] != null) {
	startIndex = match[0].length;
	var newUrl = origianlUrl.substring(startIndex);
	GM_log("Change url from " + origianlUrl + " to " + newUrl);
	window.location.href = newUrl;
}