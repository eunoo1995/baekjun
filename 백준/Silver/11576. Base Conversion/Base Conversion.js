let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ");
const num = input[2].split(" ");

let result = [];

let sum = 0;
let pow = num.length - 1;
for (let i = 0; i < num.length; i++) {
  sum += a ** pow-- * num[i];
}

while (sum > 0) {
  result.push(sum % b);
  sum = Math.floor(sum / b);
}

console.log(result.reverse().join(" "));
