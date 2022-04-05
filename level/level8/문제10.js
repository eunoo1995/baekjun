const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let half = Number(input);
let pi = Math.PI;

console.log((half ** 2 * pi).toFixed(6));
console.log((half ** 2 * 2).toFixed(6));
