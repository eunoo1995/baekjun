const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let avg = 0;
let cnt = 0;
for (let i = 1; i < input.length; i++) {
  let arr = input[i].split(" ");
  avg = 0;
  sum = 0;
  cnt = 0;
  for (let j = 1; j < arr.length; j++) {
    sum += parseInt(arr[j]);
  }
  avg = sum / arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > avg) cnt++;
  }
  console.log(((cnt / arr[0]) * 100).toFixed(3) + "%");
}
