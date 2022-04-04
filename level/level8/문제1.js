const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let length = Number(input[0]);
let arr = input[1].split(" ");
let count = 0;
for (let i = 0; i < length; i++) {
  if (Number(arr[i]) === 2) {
    count++;
  } else if (Number(arr[i]) === 3) {
    count++;
  }
  let num = 2;
  while (num * num <= Number(arr[i])) {
    if (Number(arr[i]) % num === 0) {
      break;
    }
    num++;
    if (num * num > Number(arr[i])) {
      count++;
    }
  }
}

console.log(count);
