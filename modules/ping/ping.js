/* machine module */
var BaseModule = require('../../lib/base-module')

var Ping = module.exports = function Ping(options) {
    // Apply BaseModule constructor (i.e. call super())
    BaseModule.apply(this, arguments) 
}

Ping.prototype = new BaseModule()

