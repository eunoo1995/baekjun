const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = parseInt(input);
let range = 1,
  block = 1;

while (block < num) {
  block += 6 * range;

  range++;
}

console.log(range);
