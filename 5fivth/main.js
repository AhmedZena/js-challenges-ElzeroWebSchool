// that report in the 30 video of Elzero web school JS

let a = "Elzero Web School";


/* i made z itself alone with charAt then upercasee it 
then slice (ero) beside it    */
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// i trimmed h then capital it H then repeat it 8 times
console.log(a.charAt(13).toUpperCase().repeat(8));

// i cut Elzero then i split it as that to return as array
console.log(a.slice(0, 6).split(" "));

/* i used substring at first then i used substr with template literal 
but i see that may be deleted from js idk */

// console.log (  `${a.substring(0,6) } ${a.substring(11,17) }    `  );
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)} `);

// i cut first letter then i turned it to small then sliced reminder of the words except last letter i used it later and smalled it
console.log (a.charAt(0).toLowerCase() + a.slice(1,(a.length-1)).toUpperCase() + a.charAt(a.length-1).toLowerCase());   





