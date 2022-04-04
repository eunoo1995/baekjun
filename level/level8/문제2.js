const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let min = parseInt(input[0]);
let max = parseInt(input[1]);

function prime(a, b) {
  let result = -1;
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i === 2) {
      arr.push(i);
    } else if (i === 3) {
      arr.push(i);
    }
    let n = 2;
    while (n * n <= i) {
      if (i % n === 0) break;
      n++;
      if (n * n > i) {
        arr.push(i);
      }
    }
  }

  if (arr.length != 0) {
    let minNum = Math.min(...arr);
    let sum = 0;
    for (let num of arr) sum += num;
    result = sum + "\n" + minNum;
  }
  return result;
}

console.log(prime(min, max));
