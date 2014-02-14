var api = require('api');
function submit() {

	api.create({
		username : $.usertxt.value,
		password : $.passtxt.value,
		password_confirmation:$.passcontxt.value,
		email : $.usertxt.value,
	}, function(e) {
		if (e.success) {
			Alloy.createController("done").getView().open();
			//alert('Success:\n' + 'accessToken: ' + e.access_token + '\n' + 'expiresIn: ' + e.expires_in);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

}

function back(){
	$.regWin.close();
}
