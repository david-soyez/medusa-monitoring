/* machine module */
var BaseModule = require('../../lib/base-module')
var util = require("util")

var Http = module.exports = function Http(options) {
    Http.super_.apply(this, arguments); // call parent constructor
}

util.inherits(Http, BaseModule);
