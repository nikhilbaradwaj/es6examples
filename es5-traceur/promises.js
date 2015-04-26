"use strict";
var asyncTime = 200;
function doAsyncOperation(maxTimout) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(asyncTime);
    }, asyncTime);
    setTimeout(function() {
      reject(maxTimout);
    }, maxTimout);
  });
}
function fetchDataWithWrongJSONFormat() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("<div>foo</div>");
    }, 5);
  });
}
Object.defineProperties(module.exports, {
  doAsyncOperation: {get: function() {
      return doAsyncOperation;
    }},
  fetchDataWithWrongJSONFormat: {get: function() {
      return fetchDataWithWrongJSONFormat;
    }},
  __esModule: {value: true}
});
