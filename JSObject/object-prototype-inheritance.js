function person(fname, lname, job) {
  this.firstName = fname;
  this.lastName = lname;
  this.personJob = job;
}

person.age = 22;

const myself = new person("sumit", "paliwal", "sdet");
console.log("My Name is: " + myself.firstName, "and age is: " + myself.age);

person.prototype.age = 25;

const myself1 = new person("sumit", "paliwal", "sdet");
console.log("My Name is: " + myself1.firstName, "and age is: " + myself1.age);

// NOT WORKING - CHECK LATER
person.prototype.show = function () {
  return console.log("this is object");
};

console.log(show);
