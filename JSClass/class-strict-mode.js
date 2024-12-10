// "use strict"
// The syntax in classes must be written in "strict mode".

class Car {
  constructor(name) {
    this.name = name;
  }

  driver() {
    console.log("driver the car", this.name);
  }

  yearOfManufacture(year) {
    console.log("Car Manufacture Year is", year);
  }

  // You will get an error if you do not follow the "strict mode" rules.
  isFourWheelDriver(wheels) {
    // fourWheels = "4 * " + wheels; // ERROR --- ReferenceError: fourWheels is not defined
    const fourWheels = "4 * " + wheels; // You always have to user strict-mode
    return console.log("Car Wheels is", fourWheels);
  }
}

const car = new Car("Maruti");
car.driver();
car.yearOfManufacture(2018);
car.isFourWheelDriver(4);
