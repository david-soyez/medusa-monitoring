/* ping service */

var BaseService = require('../../../lib/base-service')
var cp = require('child_process')
    , os = require('os')
    , timers = require('timers')
    , util = require('util')

var HttpService = module.exports = function HttpService(machine, options) {
    HttpService.super_.apply(this, arguments) // call parent constructor
}
util.inherits(HttpService, BaseService)


/**
 * Starts the periodic http check
 */
HttpService.prototype.startServiceCheck = function(cb) {
    var delay = this.options.delay || 10;
    console.log('Starting periodic http check ('+delay+'sec) for machine: '+this.machine.config.name)
    timers.setInterval(this.check.bind(this), delay*1000)
    cb && cb()
}

/**
 * Sends a http request to the machine, and callbacks when done. (async)
 */
HttpService.prototype.check = function(cb) {
    console.log('FAKE HTTP ALIVE (TODO) for machine: '+this.machine.config.name) // TODO: fix this
    this.emit('service:check:alive')
    cb && cb()
}