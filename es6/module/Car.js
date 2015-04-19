import {Vehicle} from 'vehicle'; //imports the vehicle class to use it in this module

export class Car extends Vehicle {  //exports the car class for others to consume.
    constructor(engine, year) {
        super(engine, year, 4);
    }

    drive() {
        super.drive();
        console.log("Extra driving instructions for car with engine:");
    }
}
