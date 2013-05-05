/* Base service Prototype
 * inherits: events.EventEmitter
 */

var EventEmitter = require("events").EventEmitter
var util = require("util")

var BaseService = module.exports = function BaseService(machine, options) {
    BaseService.super_.call(this) // call parent constructor
    this.options = options
    this.machine = machine
}

util.inherits(BaseService, EventEmitter);

BaseService.prototype.startServiceCheck = function() { }
BaseService.prototype.check = function() { }
