// Accessors (Getter/Setters)

const person = {
  fname: "Sumit",
  lname: "Paliwal",
  age: 23,
  get personAge() {
    return this.age;
  },
  set personAge(age) {
    this.age = age;
  },
};

console.log(person);

// Get person age
console.log(person.personAge);

// Set person age
person.personAge = 24;
console.log(person.personAge);
