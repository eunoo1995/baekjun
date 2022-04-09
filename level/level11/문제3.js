const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";

input.shift();
let ori = input.map((el) => Number(el));

let length = ori.length;
for (let i = 0; i < length; i++) {
  let min = Math.min(...ori);
  result += ori.splice(ori.indexOf(min), 1) + "\n";
}

console.log(result);
