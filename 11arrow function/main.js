
// report 1

// let names = function (...nams) {
//   return `String [${nams[0]}], [${nams[1]}], [${nams[2]}], [${nams[3]}] => Done !`;
// };

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
//arrow function for names
let names = (...nams) => {
    return `String [${nams[0]}], [${nams[1]}], [${nams[2]}], [${nams[3]}] => Done !`;
}


console.log(names("Osama", "Mohamed", "Ali", "Ibrahiem"));



// report 2

let mynums =[20,50,10,60];
// let calc = (one , two , three , ...nums) => {return ((20%50+10)+50 ) }
let calc = (one , two , three , ...nums) => {return (10+20+50)  }
console.log(calc (10,20 , 50));
