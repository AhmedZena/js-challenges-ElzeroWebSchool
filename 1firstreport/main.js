let titleName = "Elzero",
  descriptionArticle = "Elzero Web School",
  dateWritting = "25/10";
  
var container = (
  `<h3>${titleName}</h3>` +
    `<p>${descriptionArticle}</p>` +
    `<span>${dateWritting}</span>`
);

var cotainerr = container.repeat(4);

document.write(cotainerr);