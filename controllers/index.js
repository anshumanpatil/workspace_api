let allControllers = {};
let normalizedPath = require("path").join(__dirname);
require("fs").readdirSync(normalizedPath).forEach(function(file) {
	let verb = file.substring(0, file.lastIndexOf('.'));
	if(verb != 'index')
	allControllers[verb] = require("./" + file);
});
module.exports = allControllers;