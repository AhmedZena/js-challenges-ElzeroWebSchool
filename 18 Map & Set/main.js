/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order  Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

// Get the number 210 form that two arrays
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// console.log("Your Solution Here"); // 210
// console.log(Math.max(...n2)); //30
// console.log([...n1, ...n2].length); //7
console.log(Math.max(...n2) * [...n1, ...n2].length); // 30*7 => 210 one line
