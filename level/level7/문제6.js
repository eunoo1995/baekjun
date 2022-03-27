const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let result = input[0] == undefined ? 0 : input.split(" ").length;

console.log(result);
