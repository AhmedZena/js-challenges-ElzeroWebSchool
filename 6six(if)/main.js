//report one

let a = 10;
let b = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log(">40");
} else {
  console.log("unknown");
}

b < 10
  ? console.log(10)
  : b >= 10 && b <= 40
  ? console.log("10 to 40")
  : b > 40
  ? console.log(">40")
  : console.log("unknown");

//report two

let st = "Elzero Web School";
//  console.log ((st.length + st.length).toString()) ;


if (((st.length + st.length).toString()) === "34") {
  console.log("Good");
} else {
  console.log("bad");
}

if (st.includes("W")?"W":false === "W") {
  console.log("Good");
} else {
  console.log("bad");
}
if (!typeof st !== "string") {
  console.log("Good");
} else {
  console.log("bad");
}

if ((typeof (st)).toString() !== "string") {
  console.log("Good");
} else {
  console.log("bad");
}

if ((typeof (st)) === "number") {
  console.log("Good");
} else {
  console.log("bad");
}

if ( st.substring(0,6).repeat(2)  === "ElzeroElzero") {
  console.log("Good");
} else {
  console.log("bad");
}

console.log(typeof st);
console.log ((typeof (st)).toString());





