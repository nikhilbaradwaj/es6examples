"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

//Empty function with no parameter and returns undefined.
var emptyFn = function emptyFn() {};

//Function with single parameter and expression (without braces)
var square = function square(x) {
    return x * x;
};

// recursive definition with the anonymous arrow function.
var factorial = (function (_factorial) {
    function factorial(_x) {
        return _factorial.apply(this, arguments);
    }

    factorial.toString = function () {
        return _factorial.toString();
    };

    return factorial;
})(function (n) {
    return n === 1 ? n : n * factorial(n - 1);
});

//function with rest parameters
var mapToSquares = function mapToSquares() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    return numbers.map(function (num) {
        return square(num);
    });
};
//mapTOSquares(2,3,6,4) should return [4,9,36,16]

//array functions inside array functions.
var sumOfSquares = function sumOfSquares(arr) {
    var sum = 0;
    arr.forEach(function (num) {
        return sum += square(num);
    });
    return sum; //return is required in multiple statements.
};

//function with more than one parameter and statement body.
var doSomeAsyncOperation = function doSomeAsyncOperation(params, callback) {
    //Statement body needs braces
    var ajax = new XMLHttpRequest();
    ajax.open("GET", params.url);
    //function with no parameter within another arrow function -
    //arrow.call and arrow.apply cannot bind a different 'this' parameter value.
    ajax.onload = function () {
        return callback.call(undefined, ajax.response);
    };
    ajax.send();
};

var something = (function () {
    function something() {
        _classCallCheck(this, something);

        this.definition = {};
    }

    _createClass(something, [{
        key: "parseResponse",

        //Can't add arrow functions as public functions inside a class.
        //parseResponse = response => console.log(response);

        value: function parseResponse(response) {
            this.definition = response;
        }
    }, {
        key: "doSomething",

        //'this' context within arrow function without bind
        // or without closure by declaring variables like var that = this;
        value: function doSomething(params) {
            var _this = this;

            this.params = params;
            var that = this;
            var es5callback = function es5callback(response) {
                that.parseResponse(response); // this is out of context. So use that
            };

            var es6callback = function es6callback(response) {
                return _this.parseResponse(response);
            }; //this is in context. So no need for that.

            doSomeAsyncOperation(params, es5callback);
            doSomeAsyncOperation(params, es6callback);
        }
    }]);

    return something;
})();

function Person() {
    var _this2 = this;

    this.age = 0;
    this.grow = setInterval(function () {
        return _this2.age++;
    }, 1000); //lexical 'this' binding. this here is an instance of Person.
}

//Arrow function cannot be a constructor
Animal = function (name, age) {
    undefined.age = age;
    undefined.name = name;
};
if (Animal.prototype) {
    Animal.prototype.getName = function () {
        return undefined.name;
    }; //Animal.prototype is undefined
}

var a = new Animal(); // TypeError: func is not a constructor

//Arrows cannot be generators. 'yield' may not be used in an arrow function's body.