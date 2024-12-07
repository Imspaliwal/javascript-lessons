// 1st way

const person = {};

person.fname = "Sumit";
person.lname = "Paliwal";

console.log(person);

// 2nd way

const office = new Object();

office.name = "TCS";
office.address = "Bengaluru";

console.log(office);

// Object Constructor Function - If want to create multiple object with same type

function person1(fname, lname) {
  this.fristName = fname;
  this.lastName = lname;
}

const mother = new person1("Rama", "Devi");
const father = new person1("Ram", "Kumar");
const son = new person1("Kush", "Kumar");

console.log(mother);
console.log(father);
console.log(son);

// Object Property Default Value

function person2(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  this.language = "Hindi";
}

const daughter = new person2("Sita", "Kumari");

console.log(daughter);
