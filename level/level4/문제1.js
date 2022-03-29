const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

let arr = input[1].split(" ");

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(min, max);
