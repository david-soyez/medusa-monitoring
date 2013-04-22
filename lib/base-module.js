var BaseModule

BaseModule = (function() {
  function BaseModule(options) {
    this.options = options
    this.data = []
  }

  BaseModule.prototype.checkService = function() {}

  BaseModule.prototype.broadCastData = function() {}

  BaseModule.prototype.getWebView = function() {}

  return BaseModule

})()

module.exports = BaseModule