const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ");

let fir = input[0].split("");
let sec = input[1].split("");

let num1 = "";
let num2 = "";
for (let i = fir.length - 1; i >= 0; i--) {
  num1 += fir[i];
}
for (let i = sec.length - 1; i >= 0; i--) {
  num2 += sec[i];
}
let result = parseInt(num1) > parseInt(num2) ? num1 : num2;

console.log(result);
