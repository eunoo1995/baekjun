const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString();

let num = input;

let cnt = 0;
let next = num;
do {
  if (next.length == 1) {
    next = 0 + next;
  }
  let a = next.split("")[0];
  let b = next.split("")[1];
  let c = parseInt(a) + parseInt(b) + "";
  next = b + c.charAt(c.length - 1);
  if (next.charAt(0) == 0) {
    next = next.substring(1);
  }
  cnt++;
} while (next != num);
console.log(cnt);
