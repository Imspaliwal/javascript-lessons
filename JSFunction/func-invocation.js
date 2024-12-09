// On defining function will not invoke, until it invoked explicitly

function myFunction(a, b) {
  return a * b;
}
const result = myFunction(10, 2);
console.log(result);

// The function above does not belong to any object.
// But in JavaScript there is always a default global object.

// In HTML the default global object is the HTML page itself,
// so the function above "belongs" to the HTML page.

// In a browser the page object is the browser window.
// The function above automatically becomes a window function.

// window.myFunction(10, 10); // ReferenceError: window is not defined error, if not working with borwser
