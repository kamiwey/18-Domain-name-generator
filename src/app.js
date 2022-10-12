/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  randomWebsite();
};

let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "stunning", "fantastic"];
let noun = ["jogger", "racoon", "polloloco"];
var ext = [".com", ".net", ".us", ".io"];

let newArray = [];
for (let p in pronoun)
  for (let e in ext)
    for (let a in adj)
      for (let n in noun)
        newArray.push(pronoun[p] + adj[a] + noun[n] + ext[e] + "<br/>");

function randomWebsite() {
  document.querySelector("#website").innerHTML = newArray;
}
console.log(newArray);

// more tipical way of do it

// for (let p = 0; p < pronoun.length; p++) {
//   for (let a = 0; a < adj.length; a++) {
//     for (let n = 0; n < noun.length; n++) {
//       for (let e = 0; e < ext.length; e++) {
//         document.write(pronoun[p] + adj[a] + noun[n] + ext[e] + "<br/>");
//       }
//     }
//   }
// }
