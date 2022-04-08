const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let answer = 0;

let num = Number(input);

let tmp = [];
for (let i = 1; i <= num; i++) {
  let result = i;
  let str = String(i);
  let length = str.length;
  for (let j = 0; j < length; j++) {
    result += Number(str[j]);
  }
  if (result == num) tmp.push(i);
}

if (tmp.length != 0) {
  answer = Math.min(...tmp);
}

console.log(answer);
