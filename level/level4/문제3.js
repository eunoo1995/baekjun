const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

let num = 1;
for (let item of input) num *= item;

num += "";

let cnt = 0;
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < num.length; j++) {
    if (i == Number(num[j])) cnt++;
  }
  console.log(cnt);
  cnt = 0;
}
