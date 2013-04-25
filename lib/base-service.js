/* Base service Prototype
 * inherits: events.EventEmitter
 */

var EventEmitter = require("events").EventEmitter
var util = require("util")

var BaseService = module.exports =  function BaseService(options) {
    BaseService.super_.call(this) // call parent constructor
    this.options = options
}

util.inherits(BaseService, EventEmitter);


BaseService.prototype = {
    check: function() { }
}