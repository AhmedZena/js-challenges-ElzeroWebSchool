



let d = "-100", e = "20", f = 30  , g = true  ;

//console.log ( -d * e + f *  --g   ); // 2000  
// console.log (-d + ++e * ++g + ++f   );  // 173 

/* we get reminder of 100/30 = 10 then raise it to the power of (++g = ++1 =2 ) 
that equal 100  then multiply 20  that equal 2000 */
console.log ( ((-d%f)** ++g) * e   );

