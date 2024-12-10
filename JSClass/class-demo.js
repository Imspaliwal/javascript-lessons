// A JavaScript class is not an object.
// It is a template for JavaScript objects.

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
}

const car = new Car("Maruti");
car.driver();
car.yearOfManufacture(2018);
