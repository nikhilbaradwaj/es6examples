//Empty function with no parameter and returns undefined.
let emptyFn = () => {};

//Function with single parameter and expression (without braces)
let square = x => x * x;

// recursive definition with the anonymous arrow function.
let factorial = n => (n === 1) ? n : n * factorial(n-1);

//function with rest parameters
let mapToSquares = (...numbers) => numbers.map(num => square(num));
//mapTOSquares(2,3,6,4) should return [4,9,36,16]

//array functions inside array functions.
let sumOfSquares = (arr) => {
    let sum = 0;
    arr.forEach(num => sum += square(num));
    return sum; //return is required in multiple statements.
};

//function with more than one parameter and statement body.
let doSomeAsyncOperation = (params, callback) => {  //Statement body needs braces
    let ajax = new XMLHttpRequest();
    ajax.open("GET", params.url);
    //function with no parameter within another arrow function -
    //arrow.call and arrow.apply cannot bind a different 'this' parameter value.
    ajax.onload = () => callback.call(this, ajax.response);
    ajax.send();
};

class something {

    constructor() {
        this.definition = {};
    }

    //Can't add arrow functions as public functions inside a class.
    //parseResponse = response => console.log(response);

    parseResponse(response) {
        this.definition = response;
    }

    //'this' context within arrow function without bind
    // or without closure by declaring variables like var that = this;
    doSomething(params) {
        this.params = params;
        var that = this;
        var es5callback = function (response) {
            that.parseResponse(response);  // this is out of context. So use that
        };

        var es6callback = response => this.parseResponse(response); //this is in context. So no need for that.

        doSomeAsyncOperation(params, es5callback);
        doSomeAsyncOperation(params, es6callback);
    }
}

function Person() {
    this.age = 0;
    this.grow = setInterval(() => this.age++, 1000); //lexical 'this' binding. this here is an instance of Person.
}

//Arrow function cannot be a constructor
let Animal = (name, age) => {
    try {
        this.age = age; //Typeerror: 'undefined' is not an object. We cannot reference a property of 'this' here.
        this.name = name;
    }
    catch(e) {

    }
};
if (Animal.prototype) {
    Animal.prototype.getName = () => this.name;  //Animal.prototype is undefined
}

try {
    var a = new Animal(); // TypeError: func is not a constructor
} catch (e) {

}


//Arrows cannot be generators. 'yield' may not be used in an arrow function's body.

