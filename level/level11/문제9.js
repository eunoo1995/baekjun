const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let tmp = input.map((el) => el.split(" "));

let arr = tmp.sort((a, b) => Number(a[0]) - Number(b[0]));

arr.forEach((el) => console.log(el.join(" ")));
