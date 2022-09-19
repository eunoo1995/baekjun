let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

console.log(+input % 2 === 0 ? "SK" : "CY");
