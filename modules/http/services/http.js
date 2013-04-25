/* ping service */

var BaseService = require('../../../lib/base-service')
var cp = require('child_process')
    , os = require('os')
var util = require("util")

var HttpService = module.exports = function HttpService() {
    HttpService.super_.apply(this); // call parent constructor
}
util.inherits(HttpService, BaseService)


/**
 * Sends a http request to the machine, and callbacks when done. (async)
 */
HttpService.prototype.check = function(machine, cb) {
    console.log('FAKE HTTP ALIVE (TODO)') // TODO: fix this
    this.emit('service:check:alive')
    cb && cb()
}