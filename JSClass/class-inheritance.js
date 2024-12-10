class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  detail() {
    return "Car brand " + this.brand + " and model " + this.model;
  }

  // getter and setter
  get carname() {
    // just do not keep getter and setter name same as property name
    return this.brand;
  }

  set carname(name) {
    this.brand = name;
  }
}

class Audi extends Car {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = year;
  }

  yearOfManufacture() {
    return console.log(this.detail(), "Manufature Year", this.year);
  }
}

const audi = new Audi("Audi", "XS", 2024);
audi.yearOfManufacture();

// Access getter and setter from class
console.log(audi.carname);
audi.carname = "Honda";
console.log(audi.carname);

audi.yearOfManufacture();
