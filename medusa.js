#!/usr/bin/env node
var optimist = require('optimist');
var argv = optimist
    .usage('Lightweight distributed system monitoring tool powered by node.js.\nUsage: $0 [start|stop|status|cli]')
    .options('h', {
        alias: 'help',
        description: 'Show this help message'
    })
    .argv;

// parsing args

// console.log('optargs are:');
// console.dir(argv);

if(argv._.length == 0 || argv.help || argv.h)
{
    optimist.showHelp();
}
else if(argv._.length && ['start','stop','status','cli'].indexOf(argv._[0]) >= 0) // see if the first non-hyphenated option is either start/stop/status/cli
{
    console.log('action: '+argv._[0]);
}


console.log('EOF');
