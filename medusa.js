#!/usr/bin/env node
var optimist = require('optimist')
var Core = require('./modules/core')
var mainCore = new Core()


var argv = optimist
    .usage('Lightweight distributed system monitoring tool powered by node.js.\n\nUsage: $0 [start|stop|status|cli]')
    .options('h', {
        alias: 'help',
        description: 'Show this help message'
    })
    .options('V', {
        alias: 'version',
        description: 'Print the version number',
        boolean: true
    })
    .options('config', {
        description: 'Specify a configuration file to use instead of the default one.',
        string: true
    })
    .argv;

// parsing args

if(argv.config)
{
    mainCore.loadConfig(argv.config)
}

if(argv.help || argv.h) // show help
{
    optimist.showHelp();
}
else if(argv._.length && ['start','stop','status','cli'].indexOf(argv._[0]) >= 0) // see if the first non-hyphenated option is either start/stop/status/cli
{
    console.log('action: '+argv._[0])
    if(argv._[0] == 'start')
        mainCore.start()
}
else if(argv.V || argv.version) // show version
{
    console.log('medusa-monitoring v'+mainCore.version)
}


console.log('EOF');
