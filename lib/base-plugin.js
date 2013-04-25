/* Base Plugin Prototype */

var BasePlugin = module.exports =  function BasePlugin(options) {
    this.options = options
}

util.inherits(BasePlugin, EventEmitter)
 
// example of method
// BasePlugin.prototype.myMethod = function {}
