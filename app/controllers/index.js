var persist = require('persist');
var sessionId = persist.getSessionId();

Ti.API.info(sessionId);

if (sessionId === "undefined" || sessionId === "null") {

	Alloy.createController("loginWindow").getView().open();
} else {

	Alloy.createController("mainTabGroup").getView().open();
}

//$.index.open();
