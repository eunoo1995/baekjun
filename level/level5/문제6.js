const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let score = [];

for (let i = 1; i < input.length; i++) {
  score.push(input[i]);
}

let result = 0,
  count = 0,
  arr = [];
for (let i = 0; i < score.length; i++) {
  let oxarr = score[i].split("");
  result = 0;
  count = 0;
  length = oxarr.length;
  for (let j = 0; j < length; j++) {
    let ox = oxarr.shift();
    if (ox == "O") result += ++count;
    else count = 0;
  }
  console.log(result);
}
