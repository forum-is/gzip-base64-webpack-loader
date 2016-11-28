var loaderUtils = require('loader-utils');
var pako = require('pako');
var b64 = require('base64-js');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  this.value = content;
  var data = b64.fromByteArray(pako.deflate(content));
  return "module.exports = " + JSON.stringify(data);
};

