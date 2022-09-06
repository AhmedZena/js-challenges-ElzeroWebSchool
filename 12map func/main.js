//first report
let swappingCase = "elZERo";

let sw = swappingCase
  .split("")
  .map(function (el) {
    // if (el === el.toUpperCase()) {
    //   return el.toLowerCase();
    // } else {
    //   return el.toUpperCase();
    // }
    //another way to do it
    // el===el.toUpperCase() ? x=el.toLowerCase() :x= el.toUpperCase();
    // return x;
    //another way to do it
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  })
  .join("");
console.log(sw);

//second report

let invnums = [1, -10, -20, 15, 100, -30];

let inv = invnums.map(function (el) {
  return el * -1;
});
console.log(inv);

//third report
let ignoreNums = "ELz123er4o";
let ignor = ignoreNums
  .split("")
  .map(function (el) {
    //     if(  (parseInt(el)) >0){
    // return;
    //    } else {
    // return el;
    //    }

    //another way to do it
    //    console.log( isNaN (parseInt(el)));
    if (isNaN(parseInt(el)) == true) {
      return el;
    }
  })
  .join("");

console.log(ignor);

// console.log(typeof NaN);

let friends = ["John", "Jane", "Mark", "Bob", "Mary", "Tom", "Jerry"];
let f = friends.filter(function (el) {
  return el.startsWith("J");
});
console.log(f);

let nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let n = nums.filter(function (el) {
  return el % 2 === 0;
});
console.log(n);

//forth report
a = [5, 4, 3, 2, 1];

smallvalues = a.filter(function (x) {
  return x < 3;
}); // [2, 1]
console.log(smallvalues);

everyother = a.filter(function (x) {
  return x % 2 == 1;
}); // [5, 3, 1]
console.log(everyother);

//fifth report

let sentence = "I Love Foood Code Too Playing Much";
console.log(sentence.split(" "));
let sFilter = sentence
  .split(" ")
  .filter(function (el) {
    return el.length <= 4;
  })
  .join(" ");
console.log(sFilter);

//six report

let ignoreNums2 = "ELz123er4o";
let ignor2 = ignoreNums
  .split("")
  .filter(function (el) {
    return isNaN(parseInt(el));
  })
  .join("");

console.log(ignor);

//report seven

let mix = "A13BS2ZX";

let mFilter= mix.split("").filter(function (el) {
  return ! isNaN(parseInt(el))
})
console.log(mFilter);
let z =1
let mMap = mFilter.map(function(ele){
    z *= parseInt (ele)
    return z;
})[mFilter.length-1]
console.log(mMap);


// let w=1
// for (i=0;i<mFilter.length ;i++){
// w *= parseInt (mFilter[i])
// }
// console.log(w);

console.log("------------");
let theBiggest = ["Bla", "Propaganda", "other", "AAA", "Battery", "Test" ] ;

// let biggest = theBiggest.filter(function(el){


// })  


let arr =[];
bigg= 0;
for (i=0;i<theBiggest.length ;i++){
    arr.push(theBiggest[i].length)
    // Math.max(...arr)
    
    if (Math.max(...arr) === theBiggest[i].length){
     bigg= theBiggest[i]
    }
}
console.log(bigg);


//by reduce method to get the biggest word
let theBiggest2 = ["Bla", "Propaganda", "other", "AAA", "Battery", "Test" ] ;
let biggest2 = theBiggest2.reduce(function(a,b){
    if (a.length > b.length){
        return a;   //return the biggest word
    }
    else{
        return b;
    }
});
console.log(biggest2);



// let biggest = theBiggest.filter(function(el){
//     // console.log(theBiggest.indexOf(el));
// console.log(el.length);
// cx = el.length 
//     if (el.length >(el.length-1)){
//         return el;
//     }
    
//     // return el
// })






// console.log(biggest);








let removeChars= ["E", "@","@", "L", "z", "@","@","E", "R", "@", "o"];
let rem = removeChars.filter(function(el){
    return el !== "@";
}   ).join("");
console.log(rem);




function join3(arr, sep = ' ') {
    var result = "";
    for (let i = 0; i < arr.length ; i++) {
          result += arr[i];
          result += sep;
    }
return result;
  };


console.log(join3(["ahmed", "gamal", "zena"]));



