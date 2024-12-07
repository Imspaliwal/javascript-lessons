const person1 = {};

person1.fname = "Sumit";
person1.lname = "Paliwal";
person1.job = "SDET";

console.log(person1);

const person2 = {};

person2.fname = "Rohit";
person2.lname = "Upadhyay";
person2.job = "BA";

console.log(person2);

// assign
const person1assign = Object.assign(person1, person2);
console.log(person1assign);

// create
const newperson = Object.create(person1);
console.log(newperson);

// entries
const entries = Object.entries(person1);
console.log(entries);

// fromEntries - create new object with entries
const objectwithentry = Object.fromEntries(entries);
console.log(objectwithentry);

// keys
const objkeys = Object.keys(person2);
console.log(objkeys);

// values
const objvalues = Object.values(person2);
console.log(objvalues);

// Groups object elements according to a function - CHECK LATER
// Object.groupBy(object, callback)

// Property Management Methods
// https://www.w3schools.com/js/js_object_definition.asp

// Object Protection Methods
// https://www.w3schools.com/js/js_object_definition.asp
