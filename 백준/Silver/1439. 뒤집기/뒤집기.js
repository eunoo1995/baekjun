let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let str = input.replace(/[0]+/g, "0").replace(/[1]+/g, "1");

let one = 0;
let zero = 0;

[...str].forEach((item) => (item === "1" ? one++ : zero++));

console.log(Math.min(one, zero));
