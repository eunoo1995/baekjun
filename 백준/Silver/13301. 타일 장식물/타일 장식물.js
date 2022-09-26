let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = +input;
let tmp = [0n, 1n];
for (let i = 2; i <= num; i++) {
  tmp[i] = tmp[i - 1] + tmp[i - 2];
}

const [a, b] = tmp.reverse();

console.log(a * 2n + (a + b) * 2n + "");
