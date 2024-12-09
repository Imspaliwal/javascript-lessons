// What is this?
// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Imp

// Call method is predefined method,
// Calls a method of an object, substituting another object for the current object.

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

person.fullName.call(person1);
person.fullName.call(person2);

const personArgs = {
  fullName: function (fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    return console.log(this.firstName + " " + this.lastName);
  },
};

// Can call with arguments
personArgs.fullName.call(person2, "Deep", "Mala");
