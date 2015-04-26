"use strict";
var sides = Symbol();
var privateData = new WeakMap();
function doSomething() {
  console.log("Do Something");
}
var Polygon = (function() {
  function Polygon(sides) {
    this[sides] = sides;
    privateData.set(this, {sides: sides});
  }
  return ($traceurRuntime.createClass)(Polygon, {print: function() {
      doSomething.call();
      console.log("This is a polygon with number of sides = " + this[sides]);
      console.log("This is a polygon with number of sides = " + privateData.get(this.sides));
    }}, {draw: function() {
      console.log("Draws is the shape of the Polygon");
    }});
}());
var square = (function($__super) {
  function square(sideLength) {
    $traceurRuntime.superConstructor(square).call(this, 4);
    privateData.set(this, {sideLength: sideLength});
  }
  return ($traceurRuntime.createClass)(square, {
    area: function() {
      return Math.pow(privateData.get(this).sideLength, 2);
    },
    print: function() {
      $traceurRuntime.superGet(this, square.prototype, "print").call(this);
      console.log("This is a square.");
    }
  }, {}, $__super);
}(Polygon));
Object.defineProperties(module.exports, {
  Polygon: {get: function() {
      return Polygon;
    }},
  square: {get: function() {
      return square;
    }},
  __esModule: {value: true}
});
