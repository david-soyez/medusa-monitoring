var Module

Module = (function() {
  function Module(options) {
    this.options = options
    this.data = []
  }

  Module.prototype.checkService = function() {}

  Module.prototype.broadCastData = function() {}

  Module.prototype.getWebView = function() {}

  return Module

})()

module.exports = Module