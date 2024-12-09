// Function Declaration
function functionName(parameters) {
  // code to be executed
}

// Function Expression
const x = function (a, b) {
  return a * b;
};

// Function() Constructor - NOT Recomm.
const myFunction1 = new Function("a", "b", "return a * b");
let y = myFunction1(4, 3);

// Function Hoisting
myFunction2(5);

function myFunction2(y) {
  return y * y;
}

// Function can be used in expression
function add(a, b) {
  return a + b;
}

let total = add(10, 20) + 20;
console.log("Function can be used in expression", total);

// typeof
console.log(typeof add);

// arguments.lenght
function args(a, b) {
  return arguments.length;
}
console.log(args(10, 10));

// toString
let funcString = add.toString();
console.log(funcString);
