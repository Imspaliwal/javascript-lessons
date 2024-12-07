function person(fname, lname, job) {
  this.firstName = fname;
  this.lastName = lname;
  this.personJob = job;
}

person.age = 22;

const myself = new person("sumit", "paliwal", "sdet");
console.log("My Name is: " + myself.firstName, "and age is: " + myself.age);

// You cannot add new property in a existing constructor object, you have to define in object constructor itself.

// Check object-prototype-inheritance.js
