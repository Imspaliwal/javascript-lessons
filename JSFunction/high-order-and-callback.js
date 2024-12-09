// High Order Function and Callback

function add(a, b, cb) {
  let result = a + b; // task which will take some time, suppose transction search
  cb(result); // do something with result, suppose verification
}

function showResult(res) {
  console.log(res);
}

add(10, 20, showResult); // add is High Order Function and cb is Callback Function

add(10, 40, (res) => console.log(res)); // if you write in another way using arrow function

// Function can return function

function multiply(a, b, cb) {
  let result = a * b; // task which will take some time, suppose transction search
  cb(result); // do something with result, suppose verification
  return () => console.log(result);
}

let multiRes = multiply(10, 20, () => {});
multiRes();
