// ==UserScript==
// @name           reloadFailedPage
// @namespace      http://org.codeexample.jefferyyuan/userscripts
// @description    Reload the page if it's not loaded correctly due to temporary internal firewall failure.
// @include        *
// ==/UserScript==
//

var signalFailed = "Notification: Gateway Timeout";

function requestFailed() {
	var title = document.title;
	var failed = false;
	if (title.match(signalFailed))
	{
		failed = true;
		GM_log("failed = true " + title);
		GM_log("location href: " + window.location.href);
	}
	return failed;
}

var timer;
function reloadPageIfFailed() {
	window.clearTimeout(timer);
	var failed;
	failed = requestFailed();
	if (!failed)
		return;
	GM_log("Reload page " + window.location.href);
	timer = window.setTimeout("document.location.reload();", 5 * 1000);
}

reloadPageIfFailed();