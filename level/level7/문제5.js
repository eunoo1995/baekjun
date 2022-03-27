const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let str = input.toUpperCase();
let obj = {};

for (let i = 0; i < str.length; i++) {
  obj[str[i]] = 0;
}

for (let i = 0; i < str.length; i++) {
  obj[str[i]]++;
}

let char = "";
let alpa = Object.keys(obj);
let cnt = Object.values(obj);
let max = Math.max(...cnt);

let chk = 0;
for (let val of cnt) if (val == max) chk++;

if (chk == 1) console.log(alpa[cnt.indexOf(max)]);
else console.log("?");
