"use strict";
var $__vehicle__;
var Vehicle = ($__vehicle__ = require("vehicle"), $__vehicle__ && $__vehicle__.__esModule && $__vehicle__ || {default: $__vehicle__}).Vehicle;
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
