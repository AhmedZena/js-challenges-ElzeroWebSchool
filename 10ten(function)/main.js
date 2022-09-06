// function randomInput(...args) {
//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] === "string") {
//         k= args[i];
//     //   console.log(` Hello ${args[i]}`);
//         return k;
//     }
//     console.log(k);
//     if (typeof args[i] === "number") {
//       console.log(` Your age is  ${args[i]}`);
//     }

//     if (typeof args[i] === "boolean") {
//       args[i] === true
//         ? console.log("You Are Available For Hire")
//         : console.log("You Are Not Available For Hire")

//     }
//   }
// console.log(`Hello${k}`);
// }

// randomInput( "John", false);

function randomInput(...args) {
  let x, y, z, w;
  for (let i = 0; i < args.length; i++) {
    typeof args[i] === "string" ? (x = args[i]) : (w = 0);

    typeof args[i] === "number" ? (y = args[i]) : (w = 0);

    args[i] === true
      ? (z = "You Are Available For Hire")
      : (z = "You Are Not Available For Hire");
  }
  console.log(`" Hello ${x} , your age is : ${y} , ${z} "`);
}

randomInput(3, "John", false);

// setTimeout (function(){
//   console.log("the website is loading");
// }   , 2000); 

console.log(typeof setTimeout);





