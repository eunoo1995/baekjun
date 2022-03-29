const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let str = input;

let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let result = 0;
for (let i = 0; i < arr.length; i++) {
  let length = str.length;
  str = str.replace(arr[i], ",");
  if (length != str.length) {
    i--;
  }
}

result += str.length;
console.log(result);
