/* Machine class
 * inherits: events.EventEmitter
 */

var EventEmitter = require('events').EventEmitter
var util = require('util')
var async = require('async')

var Machine = module.exports = function Machine(config) {
    this.config = config
}

util.inherits(Machine, EventEmitter)

Machine.prototype.startServiceCheck = function(cb) {
    console.log('Launching checkService for: ' + this.config.name)
    var self = this;
    async.each(this.config.services, function(service, iter_cb){
        var moduleClass = self.loadModuleClass(service.module)
        if(moduleClass) {
            thismodule = new moduleClass(self, {
                services: service.services || {}
            })
            thismodule.startServiceCheck(self, iter_cb)
        }
        else
        {
            console.log('No such service: '+service)
            iter_cb()
        }
    }, function(err){
        if(err) {
            console.log('Error occurred while starting the module\'s checkService')
            console.log(err)
            cb && cb(err)
            return;
        }
        console.log('Done launching checkService\'s for: ' + self.config.name)
        cb && cb()
    })
}

Machine.prototype.loadModuleClass = function(servicename) {
    try {
        return require('../modules/'+servicename+'/'+servicename)
    } catch(e) {
        console.log(e)
        return false
    }
}


/* Machine.prototype.myfunc = function() { } */

