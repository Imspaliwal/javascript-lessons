// 1. Rest
function add(a, b, ...others) {
  console.log(others); // Will collect and show remaining
  return a + b;
}

const res = add(2, 5, 3, 2, 1, 2);
console.log(res);

// 2. Spread

// How it worked with Array

const social = ["Facebook", "Instagram", "Youtube", "X"];

function post(socila1, socila2, socila3, socila4) {
  return "Posted on " + socila1 + socila2 + socila3 + socila4;
}

const res1 = post(social[0], social[1], social[2], social[3]); // Bad Practice
console.log(res1);

// Use Spread Operator and spread the array elements
const res2 = post(...social);
console.log(res2);

// ================================,

// Rest
// How it worked with Object

const student = {
  fullName: "Ram",
  study: 10,
  city: "Delhi",
  mobile: ["Home", "Mobile"],
};

const nameVal = student.fullName;
console.log(nameVal);

// Array De-Structuring Concept
const { fullName, study } = student;
console.log(fullName);
console.log(study);

// Now how to use rest here
const { mobile, ...rest } = student;
console.log(mobile);
console.log(rest); // Only show rest of the property

// Spread
// How it work with
const car = {
  brand: "Maruti",
  Milage: 22,
  color: "Red",
};

const audi = {
  ...car,
  brand: "Audi", // You can Override Properties
};

console.log(car);
console.log(audi);
