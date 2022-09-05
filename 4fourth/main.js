let a = 1_00,
  b = 2_00.5,
  c = 1e2,
  d = 2.4;
console.log(a, b, c, d);

console.log(Math.floor(Math.min(a, b, c, d)));
console.log(Math.pow(a, Math.floor(d)));

console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

/* 200.5 >> 200 , 2.4 >> 3 , 200/3 >> 66.66666667 ,
 66.66666667 >> 66.67 = number  , 66.67 string   */
console.log( ((Math.floor(b) /Math.ceil(d)).toFixed(2)  ).toString());
console.log( (Math.round  ( (Math.floor(b) /Math.ceil(d)).toFixed(2)  )));

