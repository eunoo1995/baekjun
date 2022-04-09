const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
let arr = input.sort((a, b) => a - b);

console.log(arr.join("\n"));
