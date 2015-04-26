module.exports = function() {
  "use strict";
  var $__0 = this;
  var emptyFn = (function() {});
  var square = (function(x) {
    return x * x;
  });
  var factorial = (function(n) {
    return (n === 1) ? n : n * factorial(n - 1);
  });
  var mapToSquares = (function() {
    for (var numbers = [],
        $__3 = 0; $__3 < arguments.length; $__3++)
      numbers[$__3] = arguments[$__3];
    return numbers.map((function(num) {
      return square(num);
    }));
  });
  var sumOfSquares = (function(arr) {
    var sum = 0;
    arr.forEach((function(num) {
      return sum += square(num);
    }));
    return sum;
  });
  var doSomeAsyncOperation = (function(params, callback) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", params.url);
    ajax.onload = (function() {
      return callback.call($__0, ajax.response);
    });
    ajax.send();
  });
  var something = (function() {
    function something() {
      this.definition = {};
    }
    return ($traceurRuntime.createClass)(something, {
      parseResponse: function(response) {
        this.definition = response;
      },
      doSomething: function(params) {
        var $__1 = this;
        this.params = params;
        var that = this;
        var es5callback = function(response) {
          that.parseResponse(response);
        };
        var es6callback = (function(response) {
          return $__1.parseResponse(response);
        });
        doSomeAsyncOperation(params, es5callback);
        doSomeAsyncOperation(params, es6callback);
      }
    }, {});
  }());
  function Person() {
    var $__1 = this;
    this.age = 0;
    this.grow = setInterval((function() {
      return $__1.age++;
    }), 1000);
  }
  var Animal = (function(name, age) {
    try {
      $__0.age = age;
      $__0.name = name;
    } catch (e) {}
  });
  if (Animal.prototype) {
    Animal.prototype.getName = (function() {
      return $__0.name;
    });
  }
  try {
    var a = new Animal();
  } catch (e) {}
  return {};
}.call(Reflect.global);
