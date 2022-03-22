const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

let arr = input;

let max = Math.max(...arr);
let line = arr.indexOf(max + "") + 1;
console.log(max + "\n" + line);
