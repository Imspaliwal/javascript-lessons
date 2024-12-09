// 1. When refer to Global Object (browser Window)
function myFunc1() {
  return this;
}
console.log(myFunc1());

// 2. When refer to Object in Object Method
const obj = {
  fname: "Sumit",
  lname: "Paliwal",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(obj.fullname());

// 3. When refer to Object in Function Constructor
function func2(firstName, lastName) {
  this.fName = firstName;
  this.lName = lastName;
}
const f2 = new func2("Ram", "Raja");
console.log(f2.fName);
