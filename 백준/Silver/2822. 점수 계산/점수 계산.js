let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

let tmp = [...input].sort((a, b) => a - b).slice(-5);

console.log(
  `${tmp.reduce((a, b) => a + b, 0)}\n${tmp
    .map((item) => input.indexOf(item) + 1)
    .sort((a, b) => a - b)
    .join(" ")}`
);
