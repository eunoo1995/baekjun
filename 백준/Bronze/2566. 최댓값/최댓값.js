let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

const max = Math.max(...input.slice().flat(1));

let a, b;

input.forEach((item, i) => {
  if (item.includes(max)) {
    a = i + 1;
    b = item.findIndex((val) => val === max) + 1;
  }
});

console.log(max);
console.log(a, b);
