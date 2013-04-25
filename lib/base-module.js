/* Base Module Prototype
 * inherits: events.EventEmitter
 */

var EventEmitter = require("events").EventEmitter
var util = require("util")
var async = require('async')

var BaseModule = module.exports =  function BaseModule(options) {
  BaseModule.super_.call(this) // call parent constructor
  this.services = []
  this.data = []
  
  if(options !== undefined)
  {
      this.moduleName = options.moduleName
       if(options !== undefined && options.services !== undefined)
        for(serviceName in options.services)
          this.addService(serviceName, options.services[serviceName])     
  }  
}
util.inherits(BaseModule, EventEmitter);


BaseModule.prototype = {
    
  /**
   * add a service
   */
  addService: function(name, options) {
    var serviceClass = require('../modules/'+this.moduleName+'/services/'+name)
    var service = new serviceClass(options)
    this.services.push(service)
  },
  
  /**
   * check the services for the specified machine
   */
  checkServices : function(machine, cb) {
      async.each(this.services, function(service, iter_cb){
        service.check(machine, iter_cb)
      })
      cb && cb()
  },
  broadCastData : function() {},
  
  getWebView : function() {}
}