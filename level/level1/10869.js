const fs = require("fs");
const inputData = fs
  .readFileSync("/Users/test/Desktop/beakjun/level/level1/10869.txt", "utf8")
  .toString()
  .split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);

// const fs = require('fs');
// const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
