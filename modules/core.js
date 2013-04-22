/* core processing of medusa */
var BaseModule = require('../lib/base-module')
var config = require('../lib/config')
exports.version = require('../package.json').version

var Core = function() {
    // Apply BaseModule constructor (i.e. call super())
    BaseModule.apply(this, arguments) 
}

Core.prototype = new BaseModule()

Core.loadConfig = function (filepath) {
    if(config.loadConfigFileSync(filepath))
    {
        console.log('Loaded config file: '+filepath)
        console.dir(config.settings)
    }
    else
    {
        console.log('Could not load config file: '+filepath)
        process.exit(1)
    }
}

/* example rewrite method create from BaseModule */
/*
Core.prototype.create = function() {
    // custom method goes here
}
*/

module.exports = Core









