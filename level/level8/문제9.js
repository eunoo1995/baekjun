const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();
let arr = input;

for (let i = 0; i < arr.length; i++) {
  let a = arr[i].split(" ")[0] ** 2;
  let b = arr[i].split(" ")[1] ** 2;
  let c = arr[i].split(" ")[2] ** 2;
  if (a + b == c || b + c == a || a + c == b) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
