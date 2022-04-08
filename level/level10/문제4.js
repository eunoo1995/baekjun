const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let row1 = input.shift();
let w = row1.split(" ")[0];
let h = row1.split(" ")[1];

arr = input.map((str) => str.trim("\r").split(""));

const answer = [];
const line = ["WBWBWBWB", "BWBWBWBW"];

for (let i = 0; i <= w - 8; i++) {
  for (let j = 0; j <= h - 8; j++) {
    for (let z = 0; z < line.length; z++) {
      let cnt = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = arr[i + x][j + y];
          if (current !== line[(x + z) % 2][y]) cnt++;
        }
      }
      answer.push(cnt);
    }
  }
}
console.log(Math.min(...answer));
