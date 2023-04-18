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

const [n, m] = input.shift();

const A = input.slice(0, n);
const B = input.slice(n);

const result = A.map((item, i) => item.map((num, j) => num + B[i][j]));

result.forEach((item) => console.log(item.join(" ")));
