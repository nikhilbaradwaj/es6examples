"use strict";
var $__0 = $traceurRuntime.initGeneratorFunction(increment),
    $__2 = $traceurRuntime.initGeneratorFunction(increment2),
    $__4 = $traceurRuntime.initGeneratorFunction(iterate),
    $__5 = $traceurRuntime.initGeneratorFunction(nextFibonacci);
function increment() {
  var $__1;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return "started";
        case 2:
          $__1 = $ctx.sent;
          $ctx.state = 4;
          break;
        case 4:
          x = 1 + $__1;
          $ctx.state = 6;
          break;
        case 6:
          $ctx.returnValue = x;
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__0, this);
}
function increment2() {
  var $__3;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = (true) ? 1 : -2;
          break;
        case 1:
          $ctx.state = 2;
          return 1;
        case 2:
          $__3 = $ctx.sent;
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return 1 + $__3;
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 0;
          break;
        default:
          return $ctx.end();
      }
  }, $__2, this);
}
function iterate(arr) {
  var i;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          i = 0;
          $ctx.state = 7;
          break;
        case 7:
          $ctx.state = (i < arr.length) ? 1 : -2;
          break;
        case 4:
          i++;
          $ctx.state = 7;
          break;
        case 1:
          $ctx.state = 2;
          return arr[i];
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        default:
          return $ctx.end();
      }
  }, $__4, this);
}
function nextFibonacci() {
  var x,
      temp;
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          x = 0;
          y = 1;
          $ctx.state = 17;
          break;
        case 17:
          $ctx.state = 2;
          return x;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return y;
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          $ctx.state = (true) ? 9 : -2;
          break;
        case 9:
          $ctx.state = 10;
          return x + y;
        case 10:
          $ctx.maybeThrow();
          $ctx.state = 12;
          break;
        case 12:
          temp = x;
          x = y;
          y = x + temp;
          $ctx.state = 8;
          break;
        default:
          return $ctx.end();
      }
  }, $__5, this);
}
Object.defineProperties(module.exports, {
  increment: {get: function() {
      return increment;
    }},
  increment2: {get: function() {
      return increment2;
    }},
  iterate: {get: function() {
      return iterate;
    }},
  nextFibonacci: {get: function() {
      return nextFibonacci;
    }},
  __esModule: {value: true}
});
