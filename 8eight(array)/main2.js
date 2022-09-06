let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer "];

// get "my" from array
/* first we got zero index element of array and  we got it's second index letter =  m 
second we got first index element of array then got the ASCII code of it's second index letter = 122
then minus 1 = 121 then returned it to string = "Y" then small letter "y"
*/
console.log(zero);
console.log(counter);
console.log(
    my[zero][ ++zero +zero] + String.fromCharCode(my[zero].charCodeAt(++zero) - --zero).toLowerCase()
    );
    
    console.log(zero);
    console.log(counter);
    my = my.slice(--zero, ++counter).reverse();
    console.log(zero);
    console.log(counter);
    // console. log (my) ; //- ["Osama", "Elham", "Mazero", "Ahmed "]
    console.log(my);
    
    // console. log (my.slice("????"));-//- ["Elham", "Mazero"]
    console.log(my.slice(++zero,--counter ));
    console.log(zero); //1
    console.log(counter); //3
    
    // console. log (); // "Elzero"
    console.log(
        '"' + my[zero ][--zero] + my[++zero][zero] + my[++zero][zero] + my[zero][++zero] + my[--zero][++counter] + my[zero][++counter] + '"'
        );
        console.log(zero);  //2
        console.log(counter);   //5
        
        // console. loE(); //- "ro"
        
        console.log(
            (my[--zero][--zero] + my[++zero][zero] + my[++zero][zero] + my[zero][++zero] + my[--zero][--counter] + my[zero][++counter]).slice(--counter, ++counter)+  /* zero= 2 counter = 5   */
            ((my[--zero][--zero] + my[++zero][zero] + my[++zero][zero] + my[zero][++zero] + my[--zero][--counter] + my[zero][++counter]).slice(counter, ++counter)).toUpperCase()  /* zero= 2 counter = 6   */   
            );
            
            
            console.log(zero);  //2
            console.log(counter);   //6

