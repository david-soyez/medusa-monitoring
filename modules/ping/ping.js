/* machine module */
var BaseModule = require('../../lib/base-module')
var util = require("util")

var Ping = module.exports = function Ping(machine, options) {
    Ping.super_.apply(this, arguments) // call parent constructor
}

util.inherits(Ping, BaseModule);


/**
* Load and add a service to this.services
*/
Ping.prototype.addService = function(name, options) {
  try {
    var serviceClass = require('./services/'+name)
    var service = new serviceClass(this.machine, options)
    this.services.push(service)
  } catch(e) {
    console.log('Could not find service "'+name+'" for module Ping: '+e)
  }
}