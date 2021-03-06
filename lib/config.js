/* Handles configuration */

var fs = require('fs');
var os = require('os');


// default config
var settings = exports.settings = {
    machine_name: os.hostname(),
    bind_address: '0.0.0.0',
    machines: {}
};

exports.loadConfigFileSync = function(filepath) {
    var data, conf;
    
    try {
        data = fs.readFileSync(filepath);
    }
    catch (err) {
        console.log('Could not read file: ' + filepath);
        console.log(err);
        return false;
    }
    
    try {
        conf = JSON.parse(data);
    }
    catch (err) {
        console.log('There has been an error parsing your JSON.');
        console.log(err);
        return false;
    }
    
    for(var key in conf) {
        if(key in settings)
            settings[key] = conf[key];
    }
    return true;
};


