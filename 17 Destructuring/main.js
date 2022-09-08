//create object with properties
// let user = {
//   theName: "ahmed",
//   theAge: "22",
//   skills: ["html", "css", "js"],
//   address: {
//     egypt: "cairo",
//     ksa: "riyadh",
//   },
// };
// let {
//   theName: n,
//   theAge: a,
//   skills: [s1, s2, s3],
//   address: { egypt: e },
// } = user;
// // console.log(n, a, s1, s2, s3, e); //ahmed 22 html css js cairo
// console.log(
//   `     My name is ${n} and
//    I am ${a} years old and
//    I know ${s1} ${s2} ${s3} and
//    I live in ${e}`
// );

// getUserInf(user);
// function getUserInf({ theName, theAge, skills, address: { egypt } }) {
//   console.log(theName);
//   console.log(theAge);
//   console.log(skills);
//   console.log(egypt);
// }

//Report

let chosen = 3;

let myFrineds = [
  { title: "Osama", age: "39", available: true, skills: ["html", "css"] },
  { title: "ahmed", age: "25", available: false, skills: ["python", "Django"] },
  { title: "Sayed", age: "33", available: true, skills: ["Php", "Larval"] },
];
let [a, b, c] = myFrineds;
// console.log(a)
switch (chosen) {
  case 1:
    // console.log("i am chosen one ");
    ({ available } = a);
    if (available == true) {
      a.available = "available";
      ({
        title,
        age,
        available,
        skills: [, css],
      } = a);

      console.log(title, age, available, css);
    } else if (available == false) {
      a.available = "not available";
      ({
        title,
        age,
        available,
        skills: [, css],
      } = a);
      console.log(title, age, available, css);
    }
    break;
  case 2:
    // console.log("i am chosen two ");
    ({ available } = b);
    if (available == true) {
      b.available = "available";
      ({
        title,
        age,
        available,
        skills: [, css],
      } = b);

      console.log(title, age, available, css);
    } else if (available == false) {
      b.available = "not available";
      ({
        title,
        age,
        available,
        skills: [, css],
      } = b);
      console.log(title, age, available, css);
    }
    break;
  case 3:
    // console.log("i am chosen three ");
    ({ available } = c);
    if (available == true) {
      c.available = "available";
      ({
        title,
        age,
        available,
        skills: [, css],
      } = c);

      console.log(title, age, available, css);
    } else if (available == false) {
      c.available = "not available";
      ({
        title,
        age,
        available,
        skills: [, css],
      } = c);
      console.log(title, age, available, css);
    }
    break;
}
