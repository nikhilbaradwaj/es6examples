"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Vehicle2 = require("./Vehicle");

//imports the vehicle class to use it in this module

var Car = (function (_Vehicle) {
    //exports the car class for others to consume.

    function Car(engine, year) {
        _classCallCheck(this, Car);

        _get(Object.getPrototypeOf(Car.prototype), "constructor", this).call(this, engine, year, 4);
    }

    _inherits(Car, _Vehicle);

    _createClass(Car, [{
        key: "drive",
        value: function drive() {
            _get(Object.getPrototypeOf(Car.prototype), "drive", this).call(this);
            console.log("Extra driving instructions for car with engine:");
        }
    }]);

    return Car;
})(_Vehicle2.Vehicle);

exports.Car = Car;