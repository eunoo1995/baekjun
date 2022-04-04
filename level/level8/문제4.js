const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ");

let n = parseInt(input[0]);
let m = parseInt(input[1]);

for (let i = n; i <= m; i++) {
  let num = 2;
  if (i == 2) console.log(2);
  else if (i == 3) console.log(3);
  while (num * num <= i) {
    if (i % num === 0) break;
    num++;
    if (num * num > i) console.log(i);
  }
}
