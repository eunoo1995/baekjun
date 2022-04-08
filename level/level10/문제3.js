const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let grade = [];

for (let i = 0; i < input.length; i++) {
  let cnt = 1;
  let w1 = Number(input[i].split(" ")[0]);
  let h1 = Number(input[i].split(" ")[1]);

  for (let j = 0; j < input.length; j++) {
    if (input[i] === input[j]) continue;
    let w2 = Number(input[j].split(" ")[0]);
    let h2 = Number(input[j].split(" ")[1]);
    if (w2 > w1 && h2 > h1) {
      cnt++;
    }
  }
  grade.push(cnt);
}

console.log(grade.join(" "));
