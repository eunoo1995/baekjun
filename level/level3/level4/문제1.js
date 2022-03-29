const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

let a;
let b;
let index = 0;

while (1) {
  a = parseInt(input[index].split(" ")[0]);
  b = parseInt(input[index].split(" ")[1]);
  if (a == 0) break;
  console.log(a + b);
  index++;
}
