const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let length = parseInt(input[0]);
let nums = input[1].split("");

let result = 0;
for (let i = 0; i < length; i++) {
  result += parseInt(nums[i]);
}

console.log(result);
