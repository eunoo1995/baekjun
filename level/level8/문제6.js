const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let length = parseInt(input.shift());

for (let i = 0; i < length; i++) {
  let arr = [];
  let n = parseInt(input[i]);
  for (let j = 1; j <= n; j++) {
    let p = 2;
    if (j == 2) arr.push(2);
    if (j == 3) arr.push(3);
    while (p * p <= j) {
      if (j % p === 0) break;
      p++;
      if (p * p > j) arr.push(j);
    }
  }
  let result = [];
  for (let k = 0; k < arr.length; k++) {
    let num1 = arr[k];
    let num2 = 0;
    if (arr.indexOf(n - num1) != -1) {
      num2 = arr[arr.indexOf(n - num1)];
      result.push([num1, num2]);
    }
  }
  let min = Number.MAX_SAFE_INTEGER;
  let index = 0;

  for (let k = 0; k < result.length; k++) {
    let num1 = result[k][0];
    let num2 = result[k][1];
    let sub = Math.abs(num1 - num2);
    if (sub === 0) {
      index = k;
      break;
    } else if (sub < min) {
      min = sub;
      index = k;
    } else if (sub == min) break;
  }
  // console.log(result);
  console.log(result[index].join(" "));
}
