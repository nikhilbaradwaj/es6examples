import {doAsyncOperation} from '../../es6/promises';
import {fetchDataWithWrongJSONFormat} from '../../es6/promises';

describe("ES6 promises Test Suite", function () {
    //Simple promise flow with failure
    it("calls async with small timeout. The promise should be rejected.", () => {
        var result = "";
        doAsyncOperation(100)
            .then(function () {
                result = "Successful after 2 s!";
                expect(result).toBe("Timeout after 1 s");
            })
            .catch(function () {
                result = "Timeout after 1 s";
                expect(result).toBe("Timeout after 1 s");
            });
    });

    //Simple promise flow with success
    it("calls async with large timeout. The promise should be fulfilled.", () => {
        var result = "";
        doAsyncOperation(300)
            .then(function () {
                result = "Successful after 2 s!";
                expect(result).toBe("Successful after 2 s!");
            })
            .catch(function () {
                result = "Timeout after 3 s";
                expect(result).toBe("Successful after 2 s!");
            });
    });

    //chained promises flow with success
    it("chains the thens for multiple async calls with success", () => {
        var timeElapsed = 0;
        var result = "";
        doAsyncOperation(100) //async operation
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(150); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(180); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(50); //async operation
                expect(result.indexOf("Timeout")).toBeLessThan(0);
            })
            .catch(function(err) {
                timeElapsed += err;
                result = "Timeout after " + timeElapsed + "ms. Waited for " + err + "ms";
                expect(result.indexOf("Timeout")).toBeLessThan(0);
            });
    });

    //Chained promise flow with failure
    it("chains the thens for multiple async calls by catching error if one fails", () => {
        var timeElapsed = 0;
        var result = "";
        doAsyncOperation(100) //async operation
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(150); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(380); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(50); //async operation
                expect(result.indexOf("Timeout")).toBeGreaterThan(0);
            })
            .catch(function(err) {
                timeElapsed += err;
                result = "Timeout after " + timeElapsed + "ms. Waited for " + err + "ms";
                expect(result.indexOf("Timeout")).toBeGreaterThan(0);
            });
    });


    //Passing results between thenables
    it("If you resolve the promise returned by then() with a normal value, you can pick up that value via a subsequent then", () => {
        doAsyncOperation(500)
            .then(function() {
                return 50; //pass the result to the next then
            })
            .then(function(res) {
                expect(res).toEqual(50);
            })
            .catch(function(err) {
                console.log(err);
            })
    });

    //Handling throwable errors.
    it("handles throwable errors if one of the thenable throws an error", () => {
        fetchDataWithWrongJSONFormat() //This async operation should return wrong JSON format
            .then(function(res) {
                return JSON.parse(res);
            })
            .then(function(res) {
                console.log(res); // this case should be unreachable.
            })
            .catch(function(err) {
                expect(err.indexOf("SyntaxError:")).toBeGreaterThan(0); //syntax error
            })
    });

//TODO - Do multiple async operations at the same time.
//TODO -Dealing with cancel
});