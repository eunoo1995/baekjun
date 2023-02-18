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

const [str, target] = input;
let stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  if (stack.slice(stack.length - target.length).join("") === target) {
    // stack = stack.slice(0, stack.length - target.length);
    for (let i = 0; i < target.length; i++) {
      stack.pop();
    }
  }
}

console.log(stack.length > 0 ? stack.join("") : "FRULA");
