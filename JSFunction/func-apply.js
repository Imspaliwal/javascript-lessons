const person = {
  fullName: function () {
    return console.log(this.fName + " " + this.lName);
  },
};

const person1 = {
  fName: "Ram",
  lName: "Raj",
};

const person2 = {
  fName: "Krishna",
  lName: "Vasudev",
};

person.fullName.apply(person1);
person.fullName.call(person2);

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const personArgs = {
  fullName: function (fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    return console.log(this.firstName + " " + this.lastName);
  },
};

// Call takes arguments seperatly
personArgs.fullName.call(person2, "Deep", "Mala");

// Take argument as Array
personArgs.fullName.apply(person2, ["Deep", "Mala"]);

// Real World Example
console.log(Math.max(1, 2, 10));
console.log(Math.max.apply(null, [1, 2, 10])); // Array do not have max method, so can use apply

// JavaScript Strict Mode

// In JavaScript strict mode, if the first argument of the apply() method is not an object,
// it becomes the owner (object) of the invoked function.
// In "non-strict" mode, it becomes the global object.

// Do some real world example of strict mode --- TO DO
