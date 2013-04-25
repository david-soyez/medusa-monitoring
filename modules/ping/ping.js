/* machine module */
var BaseModule = require('../../lib/base-module')
var util = require("util")

var Ping = module.exports = function Ping(options) {
    Ping.super_.apply(this, arguments); // call parent constructor
}

util.inherits(Ping, BaseModule);
