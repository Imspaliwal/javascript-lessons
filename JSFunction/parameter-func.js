// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

// If a function is called with missing arguments (less than declared),
//the missing values are set to undefined.

function myFunction(a, b) {
  if (b === undefined) {
    b = true;
  }
  return console.log(a, " is :", b);
}

myFunction("data");
myFunction("data", false);

// Default Value
function myFunction1(x, y = 10) {
  return console.log(x + y);
}

myFunction1(10, 10);
myFunction1(1);

// Function Rest Parameter Or Spread Operator
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
function myRestFunction(...arr) {
  let sum = 0;
  for (let i in arr) {
    sum = sum + arr[i];
  }
  return console.log(sum);
}

myRestFunction(10, 20, 30);

function myArgument() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return console.log(sum);
}

myArgument(10, 20, 30);
