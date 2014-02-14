var Cloud = require('ti.cloud');

exports.setSessionId = function() {

	Ti.App.Properties.setString('sessionId', Cloud.sessionId);
};

exports.getSessionId = function() {

	var id = Ti.App.Properties.getString('sessionId');

	return id;

};

