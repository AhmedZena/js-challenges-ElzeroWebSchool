let url1 = " elzero.org";
let url2 = "http://elzero.org";
let ur13 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let ur15 = "https://www.elzero.org:8080/articles.php?id=180&cat=topics";

let re = /(https?:\/\/(www.)?)?\w+.org(:\d{4}\/\w+.\w+\?id=\d{3,}&\w+=\w+)?/gi;

//the output
console.log(url1.match(re));
console.log(url2.match(re));
console.log(ur13.match(re));
console.log(url4.match(re));
console.log(ur15.match(re));
