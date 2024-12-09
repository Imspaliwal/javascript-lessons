// Variable
// Local & Global scope

let a = 4;

const result = function add() {
  return a + a;
};

console.log(result());

// Variable Shadowing:
// If you declare a local variable with the same name as a
// global variable inside a function, the local variable will "shadow" the global one.
// This means the function will use the local variable instead of the global one

const result1 = function mult(a) {
  return a * a;
};

console.log(result1(2));

// Counter Dilemma

let counter = 0;

function increaseCounter() {
  return counter++;
}

console.log(increaseCounter());
console.log(increaseCounter());
console.log(increaseCounter());
console.log(increaseCounter());

function increaseCounterWithLocal() {
  let counter = 0;
  return counter++;
}

console.log(increaseCounterWithLocal()); // 0
console.log(increaseCounterWithLocal()); // 0
console.log(increaseCounterWithLocal()); // 0
console.log(increaseCounterWithLocal()); // 0

// A JavaScript inner function can solve this.

function increaseCounterWithNestedFunc() {
  let counter = 0;
  function count() {
    counter++;
  }
  count();
  return counter;
}

console.log(increaseCounterWithNestedFunc()); // 1
console.log(increaseCounterWithNestedFunc()); // 1
console.log(increaseCounterWithNestedFunc()); // 1
console.log(increaseCounterWithNestedFunc()); // 1

// Using Self-invoking functions
const count = (function increaseCounterWithNestedFuncFXIED() {
  let counter = 0;
  return function count() {
    counter++;
    return counter;
  };
})();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4
