const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ");

let num1 = BigInt(input[0]);
let num2 = BigInt(input[1]);
let result = num1 + num2 + "";
console.log(result);
