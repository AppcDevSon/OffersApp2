var backend = require('acs');

exports.create = function(params,fn){
	
	backend.create(params,fn);
};


exports.login = function(params,fn){
	
	backend.login(params,fn);
};

exports.showRow = function(params,fn){
	backend.showRow(params,fn);
};

exports.logout = function(fn){
	backend.logout(fn);
};
