/* Base Module Prototype */

var BaseModule = module.exports =  function BaseModule(options) {
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

BaseModule.prototype = {
  addService: function(name, options) {
    var serviceClass = require('../modules/'+this.moduleName+'/services/'+name)
    var service = new serviceClass(options)
    this.services.push(service)
  },
  checkServices : function(machine, iter_cb) {
      for (var i = 0; i < this.services.length; i++) {
         
        this.services[i].check(machine, iter_cb)
      }
  },
  broadCastData : function() {},
  getWebView : function() {}
}