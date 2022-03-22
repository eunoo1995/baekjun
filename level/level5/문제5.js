const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let size = parseInt(input[0]);
let score = input[1].split(" ");
let maxScore = Math.max(...score);

let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += (score[i] / maxScore) * 100;
}

console.log(sum / size);
