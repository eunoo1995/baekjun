const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let result = "";
let arr = input[0].split(" ");

let tmp = [...new Set(arr)].sort((a, b) => Number(a) - Number(b));

let obj = {};

tmp.forEach((el, index) => (obj[el] = index));

for (let i = 0; i < arr.length; i++) {
  result += obj[arr[i]] + " ";
}

console.log(result);
// 시간초과
// let result = "";

// tmp.forEach((el) => {
//   let cnt = 0;
//   tmp.forEach((n) => {
//     if (el > n) cnt++;
//   });
//   result += cnt + " ";
// });

// console.log(result.trim());
