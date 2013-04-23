/* Base Module Prototype */

var BaseModule = module.exports =  function BaseModule(options) {
    this.options = options
    this.data = []
}
 

BaseModule.prototype = {
  checkService : function() {},
  broadCastData : function() {},
  getWebView : function() {}
}