const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

const length = parseInt(input[0]);

for (i = 1; i <= length; i++) {
  let arr = input[i].split(" ");
  let a = parseInt(arr[0]);
  let b = parseInt(arr[1]);
  console.log(a + b);
}
