// ES5
function add(a, b) {
  return a + b;
}

// ES6
// Not have their own THIS, Not Hoisted
add((a, b) => {
  a + b;
});

// Difference b/w normal and arrow function

// 1. Syntax

// function sayHi() {
//   return console.log("Say Hi..");
// }

const sayHi = () => console.log("Hi");

sayHi();

// 2. 'argument' keyword

function addMultiple() {
  sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return console.log(sum);
}

const addMultiple1 = () => {
  sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return console.log(sum);
};

addMultiple(10, 20, 30);

// addMultiple1(10, 20, 30); // arguments not allowed to use with arrow function, instead use spread operator

// 3. Hoisting

// JS load all the normal function when program starts

sayHiSir(); // Normal function do not give any error

function sayHiSir() {
  return console.log("Say Hi..");
}

// sayHello(); // will give error cannot access before initialization

const sayHello = () => console.log("Hi");

// 4. This keyword
const obj = {
  name: "Paliwal",
  getName: function myName() {
    return console.log(this.name);
  },
};

obj.getName();

const obj1 = {
  name: "Paliwal",
  getName: () => {
    return console.log(this.name); // This not allowed with arrow function, given give 'undefined', it return window
  },
};

obj1.getName();
