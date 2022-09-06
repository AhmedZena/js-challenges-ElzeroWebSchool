let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer "];

// get "my" from array
/* first we got zero index element of array and  we got it's second index letter =  m 
second we got first index element of array then got the ASCII code of it's second index letter = 122
then minus 1 = 121 then returned it to string = "Y" then small letter "y"
*/
console.log(
  my[0][2] + String.fromCharCode(my[1].charCodeAt(2) - 1).toLowerCase()
);

my = my.slice(0, 4).reverse();
// console. log (my) ; //- ["Osama", "Elham", "Mazero", "Ahmed "]
console.log(my);

// console. log (my.slice("????"));-//- ["Elham", "Mazero"]
console.log(my.slice(1, 3));

// console. log (); // "Elzero"
console.log(
  '"' + my[1][0] + my[1][1] + my[2][2] + my[2][3] + my[2][4] + my[2][5] + '"'
);

// console. loE(); //- "ro"

console.log(
  (my[1][0] + my[1][1] + my[2][2] + my[2][3] + my[2][4] + my[2][5]).slice(4, 5) +
    ((my[1][0] + my[1][1] + my[2][2] + my[2][3] + my[2][4] + my[2][5]).slice(5, 6)).toUpperCase()
);




    



