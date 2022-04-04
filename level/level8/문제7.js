const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ");

let n1 = Math.abs(parseInt(input[0]));
let n2 = Math.abs(parseInt(input[1]));
let n3 = Math.abs(parseInt(input[0]) - parseInt(input[2]));
let n4 = Math.abs(parseInt(input[1]) - parseInt(input[3]));

let result = Math.min(n1, n2, n3, n4);

console.log(result);
