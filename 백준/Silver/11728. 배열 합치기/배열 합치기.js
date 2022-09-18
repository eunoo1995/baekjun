let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

console.log([...input[1], ...input[2]].sort((a, b) => a - b).join(" "));
