// The Object.defineProperty() method can be used to:

// Adding a new property to an object
// Changing property values
// Changing property metadata
// Changing object getters and setters

const person = {
  fname: "Sumit",
  lname: "Paliwal",
  job: "SDET",
};

console.log(person);

Object.defineProperty(person, "age", { value: "25" });

console.log(person);

Object.defineProperty(person, "job", { enumerable: true });

console.log(Object.getOwnPropertyNames(person)); // list all properties
console.log(Object.keys(person)); // will not list when enumerable false for property
