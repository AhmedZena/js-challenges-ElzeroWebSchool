let pro = document.createElement("div");
pro.setAttribute("class", "products");
let h3 = document.createElement("h3");
h3.innerHTML = " hi i am h3";
let p = document.createElement("p");
p.innerHTML = " hi i am p";

pro.appendChild(h3);
pro.appendChild(p);

document.body.appendChild(pro);

for (var d = 0; d < 100; d++) {
  let pro = document.createElement("div");
  pro.setAttribute("class", "products");
  let h2 = document.createElement("h2");
  h2.innerHTML = `hi i am h2 number ${d}`;
  let p = document.createElement("p");
  p.innerHTML = `hi i am p number ${d}`;

  pro.appendChild(h2);
  pro.appendChild(p);

  pro.style.backgroundColor = "red";
  pro.style.textAlign = "center";
  pro.style.marginLeft = "30px";
  pro.style.marginRight = "30px";
  var aDiv = document.createElement("div");
  aDiv.className = "block";
  document.getElementsByTagName("body")[0].appendChild(pro);
}
