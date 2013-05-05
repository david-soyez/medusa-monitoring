/* Base Module Prototype
 * inherits: events.EventEmitter
 */

var EventEmitter = require("events").EventEmitter
var util = require("util")
var async = require('async')

var BaseModule = module.exports = function BaseModule(machine, options) {
  BaseModule.super_.apply(this) // call parent constructor
  this.machine = machine
  this.services = []
  this.data = []
  
  if(options !== undefined && options.services !== undefined) {
	  for(var serviceName in options.services) {
	    this.addService(serviceName, options.services[serviceName])
    }
  }
}

util.inherits(BaseModule, EventEmitter)

/**
* Load and add a service to this.services
*/
BaseModule.prototype.addService = function(name, options) {
    throw new Error('Cannot call this method directly, it needs to be overriden.')
}

/**
 * check the services for the specified machine
 */
BaseModule.prototype.startServiceCheck = function(machine, cb) {
    async.each(this.services, function(service, iter_cb){
      service.startServiceCheck(iter_cb)
    })
    if(!this.services.length)
      console.log('no services to start')
    cb && cb()
}

BaseModule.prototype.broadCastData = function() {}

BaseModule.prototype.getWebView = function() {}
