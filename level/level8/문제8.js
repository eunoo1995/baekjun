const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let p1 = input[0].split(" ");
let p2 = input[1].split(" ");
let p3 = input[2].split(" ");

let n1 = 0;
let n2 = 0;

if (p1[0] === p2[0]) n1 = Number(p3[0]);
else if (p2[0] === p3[0]) n1 = Number(p1[0]);
else if (p1[0] === p3[0]) n1 = Number(p2[0]);

if (p1[1] === p2[1]) n2 = Number(p3[1]);
else if (p2[1] === p3[1]) n2 = Number(p1[1]);
else if (p1[1] === p3[1]) n2 = Number(p2[1]);

console.log(`${n1} ${n2}`);
