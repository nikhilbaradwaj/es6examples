"use strict";
var $__Vehicle__;
var Vehicle = ($__Vehicle__ = require("./Vehicle"), $__Vehicle__ && $__Vehicle__.__esModule && $__Vehicle__ || {default: $__Vehicle__}).Vehicle;
var Car = (function($__super) {
  function Car(engine, year) {
    $traceurRuntime.superConstructor(Car).call(this, engine, year, 4);
  }
  return ($traceurRuntime.createClass)(Car, {drive: function() {
      $traceurRuntime.superGet(this, Car.prototype, "drive").call(this);
      console.log("Extra driving instructions for car with engine:");
    }}, {}, $__super);
}(Vehicle));
Object.defineProperties(module.exports, {
  Car: {get: function() {
      return Car;
    }},
  __esModule: {value: true}
});
