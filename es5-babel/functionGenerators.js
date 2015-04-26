"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var increment = regeneratorRuntime.mark(function increment() {
    return regeneratorRuntime.wrap(function increment$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return "started";

            case 2:
                context$1$0.t40 = context$1$0.sent;
                x = 1 + context$1$0.t40;
                return context$1$0.abrupt("return", x);

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, increment, this);
});
var increment2 = regeneratorRuntime.mark(

// The first time you call increment2, nothing happens. After that, each
// time you call the  increment2 function and pass a value, you get the next integer
function increment2() {
    return regeneratorRuntime.wrap(function increment2$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (!true) {
                    context$1$0.next = 8;
                    break;
                }

                context$1$0.next = 3;
                return 1;

            case 3:
                context$1$0.t41 = context$1$0.sent;
                context$1$0.next = 6;
                return 1 + context$1$0.t41;

            case 6:
                context$1$0.next = 0;
                break;

            case 8:
            case "end":
                return context$1$0.stop();
        }
    }, increment2, this);
});
var iterate = regeneratorRuntime.mark(

//iterates through a given array
function iterate(arr) {
    var i;
    return regeneratorRuntime.wrap(function iterate$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                i = 0;

            case 1:
                if (!(i < arr.length)) {
                    context$1$0.next = 7;
                    break;
                }

                context$1$0.next = 4;
                return arr[i];

            case 4:
                i++;
                context$1$0.next = 1;
                break;

            case 7:
            case "end":
                return context$1$0.stop();
        }
    }, iterate, this);
});
var nextFibonacci = regeneratorRuntime.mark(

//iterating through nextFibonacci gives the next fibonacci number as many times as you call it.
function nextFibonacci() {
    var x, temp;
    return regeneratorRuntime.wrap(function nextFibonacci$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                x = 0;
                y = 1;
                context$1$0.next = 4;
                return x;

            case 4:
                context$1$0.next = 6;
                return y;

            case 6:
                if (!true) {
                    context$1$0.next = 14;
                    break;
                }

                context$1$0.next = 9;
                return x + y;

            case 9:
                temp = x;

                x = y;
                y = x + temp;
                context$1$0.next = 6;
                break;

            case 14:
            case "end":
                return context$1$0.stop();
        }
    }, nextFibonacci, this);
});
var foo = regeneratorRuntime.mark(

//generator delegating/yielding to another generator
function foo() {
    return regeneratorRuntime.wrap(function foo$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return 12;

            case 2:
                return context$1$0.delegateYield(iterate([43, 56, 34]), "t42", 3);

            case 3:
                context$1$0.next = 5;
                return 367;

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, foo, this);
});
exports.increment = increment;
exports.increment2 = increment2;
exports.iterate = iterate;
exports.nextFibonacci = nextFibonacci;
exports.foo = foo;

// TODO - yield a function - A subtle, tricky detail
// If the  function returns right away, it would create an error,
// because (and this is the tricky part) the generator is not technically in a paused state yet. Our function call
// is being fully evaluated first, and then the yield pauses. So, we can't call it.next(..) or the generator back
// immediately inside the yielded function, because at that exact moment the generator is still running (yield hasn't been processed).
// But we can call it.next(..) "later", immediately after the current thread of execution is complete,
// by using setTimeout(..0) "hack".

// TODO - yielding a promise from a generator for async programming!

// TODO - Concurrency with generators AKA Communicating Sequential Processes (CSP)

//use of for..of loop in the test case.
var it = iterate([2, 4, 6, 8, 9]);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a = _step.value;

        console.log(a);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var it2 = iterate([2, 4, 6, 8, 9]);
it2.next();
it2["throw"]("Error"); //pass error into the generator.

//TODO - if an error gets sent back to the generator, then try..catch will catch it
//TODO - use of for..of loop in the test case. Last value of the loop is ignored
// (usually undefined, unless you explicitly 'return' in the end of the generator

//TODO - How does async coding work with generators?
// the brackets are required here.
//infinite loop!
//yielding a yield expression?
//infinite loop!