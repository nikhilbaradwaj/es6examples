"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
var privateData = new WeakMap();

var Vehicle = (function () {
    //exports the Vehicle class for other modules to consume.

    function Vehicle(engine, year, numTyres) {
        _classCallCheck(this, Vehicle);

        privateData.set(this, { engine: engine, year: year, numTyres: numTyres });
    }

    _createClass(Vehicle, [{
        key: "drive",
        value: function drive() {
            console.log("This vehicle is driving with engine " + privateData(this).engine);
        }
    }, {
        key: "getNumberOfTyres",
        value: function getNumberOfTyres() {
            return privateData(this).numTyres;
        }
    }, {
        key: "getYearOfMake",
        value: function getYearOfMake() {
            return privateData(this).year;
        }
    }]);

    return Vehicle;
})();

exports.Vehicle = Vehicle;