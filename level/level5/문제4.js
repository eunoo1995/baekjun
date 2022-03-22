const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
for (let i = 0; i < input.length; i++) {
  let num = input[i] % 42;
  if (arr.indexOf(num) == -1) arr.push(num);
}

console.log(arr.length);
