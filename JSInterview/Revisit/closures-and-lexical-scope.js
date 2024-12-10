// Ek Bar function call ho jaye to variable value loss nhi karti retain karti hai inner function me

// Local Scope
// Global Scope
// Lexical Scope

// Closures
const totalTest = function (n) {
  let counter = n;
  //   return counter++;
  return function () {
    return counter++; // Able to use the counter variable in another funtion called lexical scope
  };
};

const result = totalTest(10);
console.log(result());
console.log(result());

// =====================================

const sum = function (a) {
  console.log("Live Viewers " + a);
  let c = 4;
  return function (b) {
    return a + b + c;
  };
};

const res = sum(2);
console.log(res(5));

// =====================================

const sumResult = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};

const result1 = sumResult(1, 2, 3);
console.log(result1.getSumTwo());
console.log(result1.getSumThree());
