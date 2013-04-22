/* core processing of medusa */

var config = require('./config');

exports.version = require('../package.json').version;

exports.loadConfig = function (filepath) {
    if(config.loadConfigFileSync(filepath))
    {
        console.log('Loaded config file: '+filepath);
        console.dir(config.settings);
    }
    else
    {
        console.log('Could not load config file: '+filepath);
        process.exit(1);
    }
};
