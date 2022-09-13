let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

input.pop();

console.log(input.map((item) => `${item[0]} ${item[1] > 17 || item[2] >= 80 ? "Senior" : "Junior"}`).join("\n"));
