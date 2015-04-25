"use strict";
function doAsyncOperation(maxTimout, otherParams) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, 2000);
    setTimeout(function() {
      reject();
    }, maxTimout);
  });
}
doAsyncOperation(1000, {}).then(console.log("Successful after 2 s!")).catch(console.log("Timeout after 1 s"));
doAsyncOperation(3000, {}).then(console.log("Successful after 2 s!")).catch(console.log("Timeout after 3 s"));
