var privateData = new WeakMap();

export class Vehicle {  //exports the Vehicle class for other modules to consume.
    constructor(engine, year, numTyres) {
        privateData.set(this, {engine: engine, year: year, numTyres: numTyres});
    }

    drive() {
        console.log("This vehicle is driving with engine " + privateData(this).engine);
    }

    getNumberOfTyres() {
        return privateData(this).numTyres;
    }

    getYearOfMake() {
        return privateData(this).year;
    }
}
