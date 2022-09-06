//body style

// document.body.style.backgroundColor = "#f0f0f0";
// document.body.style.background = "linear-gradient(to right,red, yellow)";
document.body.style.background =
  " linear-gradient(to bottom, #850056, #694798, #0072bc, #0093bc, #02ada8)";
// document.body.style.background =
//   "radial-gradient(red,blue) center center / cover";

document.body.style.fontFamily = "Arial, sans-serif";

//create the header section
let ulHeader = document.createElement("ul");
let li0 = document.createElement("li");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

//create the box1 and items indide
let box1 = document.createElement("div");
let par1 = document.createElement("p");
let txt1 = document.createElement("span");

//create the footer
let footer = document.createElement("div");
let breakLine = document.createElement("hl");
let pFooter = document.createElement("div");

//create the box2 and items indide
// let box2 = document.createElement("div");
// let par2 = document.createElement("p");
// let txt2 = document.createElement("p");

//style the header section
ulHeader.style.backgroundColor = "#850056";
ulHeader.style.width = "85%";
ulHeader.style.textAlign = "center";
// ulHeader.style.margin = "0 auto";
// ulHeader.style.background = "linear-gradient(blue) ";
ulHeader.style.listStyleType = "none";
ulHeader.style.paddingTop = "10px";
ulHeader.style.paddingRight = "100px";
ulHeader.style.marginRight = "10px";
// ulHeader.style.textAlign = "center";

// style the header Elzero
li0.innerHTML = "AhmedZena";
li0.style.color = "#21d6a7";
li0.style.display = "inline";
li0.style.fontSize = "30px";
li0.style.paddingTop = "2%";
// li0.style.paddingRight = "2%";
li0.style.fontStyle = "bold";
li0.style.paddingRight = "60%";

// style the header items Home and About and services and contact
li1.innerHTML = "Home";
li2.innerHTML = "About";
li3.innerHTML = "services";
li4.innerHTML = "Contact";
// li1.style.marginLeft = "50%";
// li1.style.marginRight = "10px";
li1.style.display = "inline";
li2.style.display = "inline";
li3.style.display = "inline";
li4.style.display = "inline";
li1.style.padding = "1%";
li2.style.padding = "1%";
li3.style.padding = "1%";
li4.style.padding = "1%";
li1.style.color = "white";
li2.style.color = "white";
li3.style.color = "white";
li4.style.color = "white";
// li4.style.paddinR = "20%";
// li4.style.marginRight = "0%";
//add items to the ulHeader

let lists = document.createElement("div");
lists.appendChild(li1);
lists.appendChild(li2);
lists.appendChild(li3);
lists.appendChild(li4);

lists.style.display = "inline";

lists.style.textAlign = "right";

// lists.style.justifyContent = "space-between";
// lists.style.alignItems = "center";
ulHeader.appendChild(li0);
// ulHeader.appendChild(li1);
// ulHeader.appendChild(li2);
// ulHeader.appendChild(li3);
// ulHeader.appendChild(li4);
ulHeader.appendChild(lists);

// sttyle of the first box
box1.style.float = "left";
box1.style.marginLeft = "2%";
box1.style.marginTop = "2%";

box1.style.backgroundColor = "white";
box1.style.width = "30%";
box1.style.textAlign = "center";
box1.style.borderRadius = "10px";
box1.style.height = "100px";

// number of the box
par1.innerHTML = "1";
par1.style.fontSize = "20px";
par1.style.paddingTop = "1%";
par1.id = "par1";
//product style
txt1.innerHTML = "produst";

//add items to the box1
box1.appendChild(par1);
box1.appendChild(txt1);

txt1.onmouseenter = function () {
  console.log("mouseenter");
};
// sttyle of the second box
// box2.style.float = "left";
// box2.style.marginLeft = "2%";
// box2.style.marginTop = "2%";
// box2.style.backgroundColor = "white";
// box2.style.width = "30%";
// box2.style.textAlign = "center";
// box2.style.borderRadius = "10px";
// box2.style.height = "100px";
// par2.innerHTML = "2";
// par2.style.fontSize = "20px";
// par2.style.paddingTop = "1%";
// txt2.innerHTML = "produst";

// //add items to the box2
// box2.appendChild(par2);
// box2.appendChild(txt2);

// let box2 = box1.cloneNode(true);
// let box3 = box1.cloneNode(true);
// let box4 = box1.cloneNode(true);
// let box5 = box1.cloneNode(true);
// let box6 = box1.cloneNode(true);
// let box7 = box1.cloneNode(true);
// let box8 = box1.cloneNode(true);
// let box9 = box1.cloneNode(true);
// let box10 = box1.cloneNode(true);
// let box11 = box1.cloneNode(true);
// let box12 = box1.cloneNode(true);
// let box13 = box1.cloneNode(true);
// let box14 = box1.cloneNode(true);
// let box15 = box1.cloneNode(true);

document.body.appendChild(ulHeader);
// document.body.appendChild(box1);
// document.body.appendChild(box2);
// document.body.appendChild(box3);
// document.body.appendChild(box4);
// document.body.appendChild(box5);
// document.body.appendChild(box6);
// document.body.appendChild(box7);
// document.body.appendChild(box8);
// document.body.appendChild(box9);
// document.body.appendChild(box10);
// document.body.appendChild(box11);
// document.body.appendChild(box12);
// document.body.appendChild(box13);
// document.body.appendChild(box14);
// document.body.appendChild(box15);
// let allBoxes = document.createElement("div");
let allBoxes = document.createElement("div");

for (let i = 0; i < 15; i++) {
  //   document.body.appendChild(box1.cloneNode(true));
  allBoxes.appendChild(box1.cloneNode(true));
}
// allBoxes.style.display = "inline";
// console.log(allBoxes);
document.body.appendChild(allBoxes);

// let par2 = document.getElementsByTagName("p")[1];
// par2.innerHTML = "2";

// let par3 = document.getElementsByTagName("p")[2];
// par3.innerHTML = "3";

// let par4 = document.getElementsByTagName("p")[3];
// par4.innerHTML = "4";

// let par5 = document.getElementsByTagName("p")[4];
// par5.innerHTML = "5";

// let par6 = document.getElementsByTagName("p")[5];
// par6.innerHTML = "6";

// let par7 = document.getElementsByTagName("p")[6];
// par7.innerHTML = "7";

// let par8 = document.getElementsByTagName("p")[7];
// par8.innerHTML = "8";

// let par9 = document.getElementsByTagName("p")[8];
// par9.innerHTML = "9";

// let par10 = document.getElementsByTagName("p")[9];
// par10.innerHTML = "10";

// let par11 = document.getElementsByTagName("p")[10];
// par11.innerHTML = "11";

// let par12 = document.getElementsByTagName("p")[11];
// par12.innerHTML = "12";

// let par13 = document.getElementsByTagName("p")[12];
// par13.innerHTML = "13";

// let par14 = document.getElementsByTagName("p")[13];
// par14.innerHTML = "14";

// let par15 = document.getElementsByTagName("p")[14];
// par15.innerHTML = "15";

for (let i = 1; i < 15; i++) {
  document.getElementsByTagName("p")[i].innerHTML = i + 1;
}

// console.log(box2);

//footer section
// pFooter.innerHTML = `                   hello my name is ahmed           `;
pFooter.style.textAlign = "center";
pFooter.style.fontSize = "20px";
let breakLine2 = breakLine.cloneNode(true);
let breakLine3 = breakLine.cloneNode(true);
let breakLine4 = breakLine.cloneNode(true);

// footer.style.backgroundColor = "blue";
document.body.appendChild(breakLine2);
document.body.appendChild(breakLine);
document.body.appendChild(breakLine3);
document.body.appendChild(breakLine4);
// footer.appendChild(breakLine);
// footer.appendChild(breakLine2);
// footer.appendChild(breakLine3);

footer.appendChild(pFooter);
document.body.appendChild(footer);

//variables

//create the header section
let footerf = document.createElement("div");
let paraf = document.createElement("p");
// let li1f = document.createElement("li");
// let li2f = document.createElement("li");
// let li3f = document.createElement("li");
// let li4f = document.createElement("li");

//style the header section
footerf.style.backgroundColor = "rgb(25 191 148)";
footerf.style.width = "100%";
footerf.style.height = "70px";
footerf.style.marginTop = "2%";
footerf.style.display = "inline-block";
// style the header Elzero
paraf.innerHTML = "copyright 2022";
paraf.style.color = "white";
paraf.style.fontSize = "25px";
// paraf.style.paddingTop = "2%";
paraf.style.fontStyle = "bold";
paraf.style.textAlign = "center";

footerf.appendChild(paraf);
document.body.appendChild(footerf);

// console.log(box1);
// console.log(par1);
// paraf.onmouseenter = function () {
//   console.log("mouseenter");
// };
ulHeader.onmouseenter = function () {
  console.log("mouseenter");
};

// paraf.onmouseleave = function () {
//   console.log("mouseleave");
// };
