let myAdmins = ["Ahmed", "Osama", "Sayed", "Lamira", "Stop"];
let employees = [
  "Amgad",
  "Samah",
  "Lman",
  "Loma",
  "Anas",
  "Ameer",
  "Lames",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

// myAdmins=myAdmins.slice(0,myAdmins.indexOf("Stop"));
// console.log(myAdmins);

document.write(`We Have X Admins`);
document.write("<br>");
document.write(`We Have ${myAdmins.indexOf("Stop")} Admins`);
document.write("<hr>");

for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
  document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]} `);
  document.write("<h3>Team Members: </h3>");
  let a = [];
  for (let j = 0; j < employees.length; j++) {
    // for (k = 0; k < employees.length; k++) {
    // document.write(` ~ ${j } `); }

    if (myAdmins[i][0] == employees[j][0]) {
      a.push(employees[j]);
      console.log(a.indexOf(employees[j]));
      document.write(`- ${a.indexOf(employees[j]) + 1} ${employees[j]}`);
      document.write("<br>");
    }
  }
  console.log(a);
  document.write("<hr>");
}
