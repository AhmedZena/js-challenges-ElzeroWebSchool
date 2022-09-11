class User {
  //private property declare
  #p;
  //the constructor is a method that is called when a new object is created
  constructor(id, theName, eSalary, expSalary, pSalary) {
    this.i = id;
    this.n = theName;
    this.e = eSalary;
    this.exp = parseInt(expSalary);
    this.#p = pSalary;
    // this.exp = +expSalary; // not working
  }
  getpSalary() {
    return parseInt(this.#p);
  }
}

//added property only to the class not objects created from it
//something like static
User.nation = "egyption";

let userOne = new User(100, "Ahmed", 5000, "6000 Dollars", 7000);
console.log(userOne);
console.log(userOne.i);
console.log(userOne.n);
console.log(userOne.e * 0.3);
console.log(userOne.exp * 0.3);
// console.log(userOne.p * 0.3);
console.log(userOne.getpSalary() * 0.3);

//only for the class User not for objects
console.log(User.nation);
console.log(User.prototype.getpSalary); //native code of the method

console.log("--------------------------------------------");

//inherite the class User that have private property
class Engineer extends User {
  constructor(id, theName, eSalary, expSalary, pSalary, Specialization) {
    super(id, theName, eSalary, expSalary, pSalary);
    this.i = id;
    this.n = theName;
    this.eS = eSalary;
    this.expS = expSalary;
    this.privateSalary = pSalary;
    this.sp = Specialization;
  }
}

let eng1 = new Engineer(1, "ahmed", 5000, 6000, 7000, "computer Engineering");

console.log(eng1);
console.log(eng1.i);
console.log(eng1.n);
console.log(eng1.eS);
console.log(eng1.expS);
console.log(eng1.privateSalary);
console.log(eng1.sp);
// console.log(eng1.p);
