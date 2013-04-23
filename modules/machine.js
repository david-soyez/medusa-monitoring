/* machine module */
var BaseModule = require('../lib/base-module')

var Machine = function(config) {
    this.config = config
    // Apply BaseModule constructor (i.e. call super())
    BaseModule.apply(this, {}) 
}

Machine.prototype = new BaseModule()


/* example rewrite method create from BaseModule */
/*
Machine.prototype.create = function() {
    // custom method goes here
}
*/

module.exports = Machine
