const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

const length = input.shift();
const tmp = input.map((a) => Number(a)).sort((a, b) => a - b);
const obj = {};

let avg = Math.round(tmp.reduce((a, b) => a + b) / tmp.length);
if (avg === -0) avg = 0;

let mid = tmp[Math.floor(tmp.length / 2)];

for (let i = 0; i < tmp.length; i++) {
  if (obj[tmp[i]] === undefined) obj[tmp[i]] = 1;
  else obj[tmp[i]]++;
}
let maxCnt = Math.max(...Object.values(obj));
let key = Object.keys(obj);
let tmpArr = [];
for (let i = 0; i < key.length; i++) {
  if (obj[key[i]] === maxCnt) tmpArr.push(key[i]);
}
let tmpArr2 = tmpArr.map((el) => Number(el)).sort((a, b) => a - b);
let cntMax = tmpArr2[0];
if (tmpArr2.length >= 2) {
  cntMax = tmpArr2[1];
}

let range = Math.max(...tmp) - Math.min(...tmp);

console.log(avg);
console.log(mid);
console.log(cntMax);
console.log(range);
