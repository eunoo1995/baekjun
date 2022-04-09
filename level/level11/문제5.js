const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let arr = input.split("");

console.log(arr.sort((a, b) => b - a).join(""));
