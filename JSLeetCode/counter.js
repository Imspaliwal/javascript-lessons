// Given an integer n, return a counter function. This counter
// function initially returns n and then returns 1 more than the
// previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = n;
  return function () {
    return counter++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
