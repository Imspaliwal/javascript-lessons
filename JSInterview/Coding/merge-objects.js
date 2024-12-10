const student = {
  fName: "Ram",
  lName: "Manohar",
};

const school = {
  schoolName: "DPS",
  city: "Pune",
};

const profile = {
  ...student,
  ...school,
};

console.log(profile);
