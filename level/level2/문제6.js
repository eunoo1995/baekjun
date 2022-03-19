const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

const now = input[0];
const cooktime = parseInt(input[1]);

let h = parseInt(now.split(" ")[0]);
let m = parseInt(now.split(" ")[1]);

if (m + cooktime < 60) {
  m += cooktime;
  console.log(h, m);
} else if (cooktime / 60 >= 1) {
  h += Math.floor(cooktime / 60);
  if (h > 23) h -= 24;
  m += cooktime % 60;
  if (m >= 60) {
    h += 1;
    if (h > 23) h -= 24;
    m -= 60;
  }
  console.log(h, m);
} else if (m + cooktime >= 60) {
  h += 1;
  if (h > 23) h -= 24;
  m = (m + cooktime) % 60;
  console.log(h, m);
}
