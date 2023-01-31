let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const arr = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map((item, i) => +item - i);

console.log(arr.length + Math.max(...arr) + 1);
