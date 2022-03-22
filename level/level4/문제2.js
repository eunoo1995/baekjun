const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

let index = 0;

while (index < input.length) {
  let a = parseInt(input[index].split(" ")[0]);
  let b = parseInt(input[index].split(" ")[1]);
  console.log(a + b);
  index++;
}
