"use strict";
var privateData = new WeakMap();
var Vehicle = (function() {
  function Vehicle(engine, year, numTyres) {
    privateData.set(this, {
      engine: engine,
      year: year,
      numTyres: numTyres
    });
  }
  return ($traceurRuntime.createClass)(Vehicle, {
    drive: function() {
      console.log("This vehicle is driving with engine " + privateData(this).engine);
    },
    getNumberOfTyres: function() {
      return privateData(this).numTyres;
    },
    getYearOfMake: function() {
      return privateData(this).year;
    }
  }, {});
}());
Object.defineProperties(module.exports, {
  Vehicle: {get: function() {
      return Vehicle;
    }},
  __esModule: {value: true}
});
