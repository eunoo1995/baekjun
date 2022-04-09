const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let arr = input.map((el) => el.split(" "));
arr.sort(function compare(a, b) {
  let result = a[0] - b[0];
  if (a[0] - b[0] == 0) {
    result = a[1] - b[1];
  }
  return result;
});

let result = "";
arr.forEach((el) => (result += el.join(" ") + "\n"));
console.log(result);
