var nconf = require('nconf');
var path = require('path');
var environment = nconf.get('NODE_ENV') || 'office';

nconf.argv().env();
nconf.file(path.resolve(__dirname, 'default.json'));
nconf.file(path.resolve(__dirname, environment + '_config.json'));

module.exports = nconf;