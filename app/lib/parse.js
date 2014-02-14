var appId = "s7vNfSUDvzSuY5uy1AbgaZPMBwIVxRGhHhK3Z2eT";
var apiResetKey = "AuUiN6D45nzR3lNR14GKdne57376hfWYo9pMBP6O";

exports.login = function(params) {

	var xhr = Ti.Network.createHTTPClient();
	var user = params.login;
	var pass = params.password;
	var url = "https://api.parse.com/1/login?username=" + user + "&password=" + pass;
	Ti.API.info(url);

	xhr.onload = function(e) {
		Ti.API.info("onload");
		var svar = JSON.parse(xhr.responseText);
		Ti.API.info(JSON.stringify(svar));
		//Ti.API.info(svar);
		//Alloy.createController("mainTabGroup").getView().open();

	};

	xhr.onerror = function(e) {
		Ti.API.info("on error");
		alert(e);

	};
	xhr.open('GET', url);
	xhr.setRequestHeader("X-Parse-Application-Id", appId);
	xhr.setRequestHeader("X-Parse-REST-API-Key", apiResetKey);
	xhr.send();

};

exports.create = function(params, fn) {

	var xhr = Ti.Network.createHTTPClient();
	var url = "https://api.parse.com/1/users";
	Ti.API.info(url);
	var tst = {
		username : params.username,
		password : params.password

	};
	var s = JSON.stringify(tst);
	Ti.API.info(s);
	xhr.setTimeout(25000);

	xhr.onload = function(e) {
		Ti.API.info("onload");
		var svar = JSON.parse(xhr.responseText);
		Ti.API.info(JSON.stringify(svar));
		//Ti.API.info(svar);
		//Alloy.createController("mainTabGroup").getView().open();

	};

	xhr.onerror = function(e) {
		Ti.API.info("on error"+xhr.status);
		alert(e);

	};

	xhr.open('POST', url);
	xhr.setRequestHeader("X-Parse-Application-Id", appId);
	xhr.setRequestHeader("X-Parse-REST-API-Key", apiResetKey);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(s);

};
