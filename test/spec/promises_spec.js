import {doAsyncOperation} from '../../es6/promises'
describe("ES6 promises Test Suite", function () {
    it("calls async with small timeout. The promise should be rejected.", function() {
        var result = "";
        doAsyncOperation(1000, {})
            .then(function () {
                result = "Successful after 2 s!";
                expect(result).toBe("Timeout after 1 s");
            })
            .catch(function () {
                result = "Timeout after 1 s";
                expect(result).toBe("Timeout after 1 s");
            });
    });

    it("calls async with large timeout. The promise should be fulfilled.", function() {
        var result = "";
        doAsyncOperation(3000, {})
            .then(function () {
                result = "Successful after 2 s!";
                expect(result).toBe("Successful after 2 s!");
            })
            .catch(function () {
                result = "Timeout after 3 s";
                expect(result).toBe("Successful after 2 s!");
            });
    });

    it("chains the thens for multiple async calls with success", function () {
        var timeElapsed = 0;
        var result = "";
        doAsyncOperation(1000, {}) //async operation
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(1500, {}); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(1800, {}); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(500, {}); //async operation
                expect(result.indexOf("Timeout")).toBeLessThan(0);
            })
            .catch(function(err) {
                timeElapsed += err;
                result = "Timeout after " + timeElapsed + "ms. Waited for " + err + "ms";
                expect(result.indexOf("Timeout")).toBeLessThan(0);
            });
    });

    it("chains the thens for multiple async calls by catching error if one fails", function () {
        var timeElapsed = 0;
        var result = "";
        doAsyncOperation(1000, {}) //async operation
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(1500, {}); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(3800, {}); //async operation
            })
            .then(function(res) {
                timeElapsed += res;
                result = timeElapsed + "time elapsed.";
                doAsyncOperation(500, {}); //async operation
                expect(result.indexOf("Timeout")).toBeGreaterThan(0);
            })
            .catch(function(err) {
                timeElapsed += err;
                result = "Timeout after " + timeElapsed + "ms. Waited for " + err + "ms";
                expect(result.indexOf("Timeout")).toBeGreaterThan(0);
            });
    });
});