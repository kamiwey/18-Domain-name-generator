/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];

// let newArray = [];
// for (let p in pronoun)
//   for (let e in ext)
//     for (let a in adj)
//       for (let n in noun) newArray.push(pronoun[p] + adj[a] + noun[n] + ext[e]);
// console.log(newArray);

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < ext.length; e++) {
        console.log(pronoun[p] + adj[a] + noun[n] + ext[e]);
      }
    }
  }
}
