// ==UserScript==
// @name           intranetTools
// @namespace      http://org.codeexample.jefferyyuan/userscripts
// @description    1. Auto click "I have read and agree to adhere to Policies". 
// @include        *
// ==/UserScript==
//

var snapshotResult = document.evaluate(
		"//a[contains(text(), 'I have read and agree to adhere to Policies')]", document,
		null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (snapshotResult) {
	GM_log("On page " + window.location.href + ", click the link " + snapshotResult.href);
	window.location.href = snapshotResult.href;
}