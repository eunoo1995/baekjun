const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let len = 1;
let tmp = [...new Set(input)];

let arr = tmp
  .sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  })
  .sort((a, b) => a.length - b.length);

console.log(arr.join("\n"));
