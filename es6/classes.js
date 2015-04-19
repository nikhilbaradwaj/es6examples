var sides = Symbol();  //private variable using ES6 Symbol
var privateData = new WeakMap(); //weakmap instance to store the private instance variables.

function doSomething() {   //Private function
    console.log("Do Something");
}

class Polygon { //syntactic sugar for prototype inheritance using ES6 Class

    static draw() {  //public static function
        console.log("Draws is the shape of the Polygon");
    }

    constructor(sides) {  //constructor
        this[sides] = sides;  //private variable using ES6 Symbol
        privateData.set(this, {sides: sides});  //private instance variables using ES6 WeakMap
    }


    print() {  //public function
        doSomething.call();
        console.log("This is a polygon with number of sides = " + this[sides]);
        console.log("This is a polygon with number of sides = " + privateData.get(this.sides));
    }

}

class square extends Polygon {  //inheritance with ES6 extends
    area() {  //new public function for derived class
        return Math.pow(privateData.get(this).sideLength, 2);
    }

    constructor(sideLength) {
        super(4); //calling the constructor of the parent class
        privateData.set(this, {sideLength: sideLength});
    }

    print() {
        super.print();
        console.log("This is a square.");
    }
}

