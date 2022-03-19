// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split(" ");

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

if (num1 < num2) console.log("<");
if (num1 > num2) console.log(">");
if (num1 == num2) console.log("==");
