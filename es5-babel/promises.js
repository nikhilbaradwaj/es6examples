"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.doAsyncOperation = doAsyncOperation;
exports.fetchDataWithWrongJSONFormat = fetchDataWithWrongJSONFormat;

var asyncTime = 200;

function doAsyncOperation(maxTimout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // do the actual async operation
            resolve(asyncTime); //success
        }, asyncTime);
        setTimeout(function () {
            reject(maxTimout); //failure. promise is not canceled. however it cannot be fulfilled.
        }, maxTimout);
    });
}

function fetchDataWithWrongJSONFormat() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("<div>foo</div>"); //return incorrect JSON format.
        }, 5);
    });
}