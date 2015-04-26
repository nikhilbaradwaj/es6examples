import {increment} from "../../es6/functionGenerators";
import {increment2} from "../../es6/functionGenerators";
import {iterate} from "../../es6/functionGenerators";
import {nextFibonacci} from "../../es6/functionGenerators";
import {delegator} from "../../es6/functionGenerators";

describe("ES6 Function Generator test suite", function () {
    it("Stops execution in between and returns with yield expression", function () {
        var s = increment();
        var result = s.next();
        const num = 4;
        expect(result.value).toBe("started"); // the generator returns the yield expression "started"
        expect(result.done).toBeFalsy();
        result = s.next(num); //passing the value back to the yield expression
        expect(result.value).toBe(num + 1);
        expect(result.done).toBeTruthy();
        //calling it again will always return {value: undefined, done: true}
        result = s.next();
        expect(result.value).toBe(undefined);
        expect(result.done).toBeTruthy();
        //calling it again will always return {value: undefined, done: true}
        result = s.next();
        expect(result.value).toBe(undefined);
        expect(result.done).toBeTruthy();
    });
    it("Returns Hi and then returns the number passed plus 1 alternatively for ever", function () {
        var s = increment2();
        expect(s.next(3).value).toBe("Hi");
        expect(s.next(4).value).toBe(5);
        expect(s.next(3).value).toBe("Hi");
        expect(s.next(7).value).toBe(8);
    });
    it("Can iterate through a list of objects with each call to the generator", function () {
        var it = iterate([1,2,3,4,5]);
        expect(it.next().value).toBe(1);
        expect(it.next().value).toBe(2);
        expect(it.next().value).toBe(3);
        expect(it.next().value).toBe(4);
        expect(it.next().value).toBe(5);
        expect(it.next().value).toBe(undefined);
    });
    it("Gives the next fibonacci number with each call to the generator", function () {
       var it = nextFibonacci();
        expect(it.next().value).toBe(0);
        expect(it.next().value).toBe(1);
        expect(it.next().value).toBe(1);
        expect(it.next().value).toBe(2);
        expect(it.next().value).toBe(3);
        expect(it.next().value).toBe(5);
        expect(it.next().value).toBe(8);
        expect(it.next().value).toBe(13);
        expect(it.next().value).toBe(21);
        expect(it.next().value).toBe(34);
    });
    it("Can delegate/yield another generator function", function () {
        var it = delegator();
        expect(it.next().value).toBe(12);
        expect(it.next().value).toBe(43);
        expect(it.next().value).toBe(56);
        expect(it.next().value).toBe(34);
        expect(it.next().value).toBe(367);
        expect(it.next().value).toBe(undefined);
    });
    it("Can use the for..of loop to iterate though a generator", function () {
        var it = delegator();
        var arr = [];
        let i = 0;
        for (let v of it) {
            arr[i] = v;
            i++;
        }
        expect(arr[0]).toBe(12);
        expect(arr[1]).toBe(43);
        expect(arr[2]).toBe(56);
        expect(arr[3]).toBe(34);
        expect(arr[4]).toBe(367);
    });
    it("Can throw an error into the function generator.", function () {
        var it = iterate([2,4,6,8,9]);
        it.next();
        expect(it.throw("Error").value).toBe("Error Occurred"); //The generator is expected to handle the error.
        it = delegator();
        it.next();
        expect(function () { it.throw("Error") }).toThrow(); //If the generator does not handle the error, the error is thrown right back out.
    });
});
