var api = require('api');
function doLogin(e) {
	api.login({
		login : $.usertxt.value,
		password : $.passtxt.value
	}, function(e) {
		if (e.success) {

			var persist = require('persist');
			persist.setSessionId();
			var sessionId = persist.getSessionId();
			Ti.API.info(sessionId);

			Alloy.createController("mainTabGroup").getView().open();

			//alert('Done');
		} else {

			alert(e.message);
		}
	});
}

function register(e) {
	Alloy.createController("registerWindow").getView().open();
}

function logout(e) {
	api.logout(function(e) {
		if (e.success) {
			alert('Success: Logged out');
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}