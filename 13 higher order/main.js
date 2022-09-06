/*
You Cannot Use
-Numbers
-Letters
- You Must Use [F1lter + Map+ Reduce- + Your Knowledge]
-Order Is Not important
-All In One Chain
*/

// s = "Hello World";
// console.log(parseInt(s));

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function (item) {
    if (isNaN(parseInt(item)) == true) {
      return item;}
  }).map(function (item) {return item == "_" ? " " : item;}).join("").slice(myString.split("")[+false], length - true);

console.log(solution); // Elzero Web School
