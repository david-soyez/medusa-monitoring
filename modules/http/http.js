/* machine module */
var BaseModule = require('../../lib/base-module')
var util = require("util")

var Http = module.exports = function Http(options) {
    Http.super_.apply(this, arguments); // call parent constructor
}

util.inherits(Http, BaseModule);

/**
* Load and add a service to this.services
*/
Http.prototype.addService = function(name, options) {
  try {
    var serviceClass = require('./services/'+name)
    var service = new serviceClass(options)
    this.services.push(service)
  } catch(e) {
    console.log('Could not find service "'+name+'" for module Http')
  }
}