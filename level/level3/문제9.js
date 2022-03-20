const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

const length = parseInt(input[0].split(" ")[0]);
const x = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < x) process.stdout.write(arr[i] + " ");
}
