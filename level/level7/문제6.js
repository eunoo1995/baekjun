const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let C = input.shift();

for (let i = 0; i < input.length; i++) {
  let k = input.shift();
  let n = input.shift();
  let arr = [];
  // 1 5 15 35 70
  // 1 4 10 20 35
  // 1 3 6  10 15
  // 1 2 3  4  5

  for (let i = 0; i <= k; i++) {
    arr.push([1]);
    for (let j = 1; j < n; j++) {
      if (i === 0) {
        arr[i].push(j + 1);
      } else {
        arr[i].push(arr[i][j - 1] + arr[i - 1][j]);
      }
    }
  }
  n = n - 1;
  console.log(arr[k][n]);
}
