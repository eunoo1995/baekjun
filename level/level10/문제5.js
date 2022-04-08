const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let len = Number(input);
let result = 665;
for (let i = 0; i < len; i++) {
  result++;
  while (1) {
    let str = String(result);
    if (str.includes("666")) break;
    result++;
  }
}
console.log(result);
