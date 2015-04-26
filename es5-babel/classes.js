"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sides = Symbol(); //private variable using ES6 Symbol
var privateData = new WeakMap(); //weakmap instance to store the private instance variables.

function doSomething() {
    //Private function
    console.log("Do Something");
}

var Polygon = (function () {
    function Polygon(sides) {
        _classCallCheck(this, Polygon);

        //constructor
        this[sides] = sides; //private variable using ES6 Symbol
        privateData.set(this, { sides: sides }); //private instance variables using ES6 WeakMap
    }

    _createClass(Polygon, [{
        key: "print",
        value: function print() {
            //public function
            doSomething.call();
            console.log("This is a polygon with number of sides = " + this[sides]);
            console.log("This is a polygon with number of sides = " + privateData.get(this.sides));
        }
    }], [{
        key: "draw",
        //syntactic sugar for prototype inheritance using ES6 Class

        value: function draw() {
            //public static function
            console.log("Draws is the shape of the Polygon");
        }
    }]);

    return Polygon;
})();

exports.Polygon = Polygon;

var square = (function (_Polygon) {
    function square(sideLength) {
        _classCallCheck(this, square);

        _get(Object.getPrototypeOf(square.prototype), "constructor", this).call(this, 4); //calling the constructor of the parent class
        privateData.set(this, { sideLength: sideLength });
    }

    _inherits(square, _Polygon);

    _createClass(square, [{
        key: "area",
        //inheritance with ES6 extends
        value: function area() {
            //new public function for derived class
            return Math.pow(privateData.get(this).sideLength, 2);
        }
    }, {
        key: "print",
        value: function print() {
            _get(Object.getPrototypeOf(square.prototype), "print", this).call(this);
            console.log("This is a square.");
        }
    }]);

    return square;
})(Polygon);

exports.square = square;