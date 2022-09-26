let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((item) => BigInt(item));

const [a, b] = input;

const multi = a * b;
let num = b;
while (1) {
  if (a % num === 0n && b % num === 0n) break;
  num--;
}

console.log(multi / num + "");
