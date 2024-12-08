const person = {
  fname: "Sumit",
  lname: "Paliwal",
  age: 24,
};

// If using const you cannot reassign object

// Prevent Extensions
Object.preventExtensions(person);

// This will throw an error
person.nationality = "English";

// Create Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits);

// This will throw an error:
fruits.push("Kiwi");
