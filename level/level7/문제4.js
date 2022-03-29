const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let v = parseInt(input[2]);

let result = Math.ceil((v - b) / (a - b));

console.log(result);
