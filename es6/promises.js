//Example 1 - Simple
//producer

var asyncTime = 2000;
export function doAsyncOperation(maxTimout, otherParams) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () { // do the actual async operation
           resolve(asyncTime); //success
        }, asyncTime);
        setTimeout(function () {
            reject(maxTimout); //failure. promise is not canceled. however it cannot be fulfilled.
        }, maxTimout);

    });
}


//Example 2 - chaining thens
var timeElapsed = 0;
doAsyncOperation(1000, {}) //async operation
    .then(function(res) {
        timeElapsed += res;
        console.log(timeElapsed + "time elapsed.");
        doAsyncOperation(1500, {}); //async operation
    })
    .then(function(res) {
        timeElapsed += res;
        console.log(timeElapsed + "time elapsed.");
        doAsyncOperation(1800, {}); //async operation
    })
    .then(function(res) {
        timeElapsed += res;
        console.log(timeElapsed + "time elapsed.");
        doAsyncOperation(2500, {}) //async operation
    })
    .catch(function(err) {
        timeElapsed += err;
        console.log("Timeout after " + timeElapsed + "ms. Waited for " + err + "ms");
    });

//Example 3 - Handling throwable errors.
//Example 4 - If you resolve the promise Q returned by then() with a normal value, you can pick up that value via a subsequent then():
//Example 5 - Do multiple async operations at the same time.
//Example 6 - Dealing with cancel