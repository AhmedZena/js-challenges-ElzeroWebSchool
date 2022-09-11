document.getElementById("register").onsubmit = function (e) {
  e.preventDefault();
  let inp = document.getElementById("phone");
  //   let reg = /\+20\d{10}/;
  let reg = /\(\d{4}\)\s\d{3}-\d{4}/;

  //   if (reg.test(inp.value)) {
  //     console.log("valid");
  //   } else {
  //     console.log("invalid");
  //   }
  let validation = reg.test(inp.value);
  if (validation) {
    console.log("valid");
    return true;
  } else {
    console.log("invalid");
    return false;
  }
};

//trial
let output = "hi i am ahmed 22 my palance is 5345432 ";
let reg = /\d{1,}/g;
let arr = output.match(reg);
console.log(arr);
