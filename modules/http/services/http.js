/* ping service */

var BaseService = require('../../../lib/base-service')
var cp = require('child_process')
    , os = require('os')
    , timers = require('timers')
    , util = require('util')
    , http = require('http')
    , async = require('async')

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
 * Checks if the URL is accessible and calls the callback.
 * callback is called with cb(accessible, status_code, response_time)
 */
HttpService.prototype.checkURL = function(url, cb) {
    http.get(url, function(res) {
      console.log("URL '"+url+"' returned: " + res.statusCode);
      cb(res.statusCode == 200, res.statusCode, 0)
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
      cb(false, -1, 0)
    });
}

/**
 * Sends a http request to the machine, and callbacks when done. (async)
 */
HttpService.prototype.check = function(cb) {
    async.every(this.options.urls, this.checkURL, function(result){
        if(result)
            console.log('Machine "'+this.machine.config.name+'" is responsive for http service.')
        else
            console.log('Machine "'+this.machine.config.name+'" is dead for http service. One of the URLs failed.')
    }.bind(this))
    this.emit('service:check:alive')
    cb && cb()
}