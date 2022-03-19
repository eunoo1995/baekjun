// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const { log } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split(" ");

let h = parseInt(input[0]);
let m = parseInt(input[1]);

if (m - 45 < 0) {
  h = h - 1 < 0 ? 23 : h - 1;
  m += 15;

  console.log(`${h} ${m}`);
} else {
  m -= 45;
  console.log(`${h} ${m}`);
}
