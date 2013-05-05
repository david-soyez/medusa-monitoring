/* core processing of medusa */
var async = require('async')
var BaseModule = require('../lib/base-module')
var config = require('../lib/config')
var Machine = require('../lib/machine')
var util = require("util")
var modules = { "ping" : require('./ping/ping'), "http" : require('./http/http') }
exports.version = require('../package.json').version

var Core = module.exports = function Core() {
    Core.super_.apply(this, arguments); // call parent constructor
    this.machines = []
}
util.inherits(Core, BaseModule);

/**
 * Loads a configuration file
 */
Core.prototype.loadConfig = function (filepath) {
    if(config.loadConfigFileSync(filepath))
    {
        console.log('Loaded config file: '+filepath)
        // console.dir(config.settings)
    }
    else
    {
        console.log('Could not load config file: '+filepath)
        process.exit(1)
    }
}

/**
 * Tells the machines to start their service check loops
 */
Core.prototype.start = function() {
    console.log('Core started...')
    for(var name in config.settings.machines) {
        var machine_info = config.settings.machines[name] // TODO: race condition?
        console.log('Creating new Machine object for: '+name)
        this.machines.push(new Machine(machine_info))
    }
    
    console.log('Machines are:')
    console.dir(this.machines)
    // start the service check "loop" for each machine, asynchronously
    async.each(this.machines, function(item, cb){ item.startServiceCheck(cb) }, function(err){
        if(err) {
            console.log('Error occurred while starting the checkService\'s')
            console.log(err)
            return;
        }
        console.log('Done launching all the checkService\'s')
    })
}

/* example rewrite method create from BaseModule */
/*
Core.prototype.create = function() {
    // custom method goes here
}
*/










