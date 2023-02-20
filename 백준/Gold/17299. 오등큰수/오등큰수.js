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

const [length, str] = input;
let arr = str.split(" ").map(Number);

const cntObj = {};
const result = [];
const stack = [];

for (let i = 0; i < length; i++) {
  cntObj[arr[i]] = (cntObj[arr[i]] || 0) + 1;
}

for (let i = 0; i < length; i++) {
  while (
    stack &&
    arr[stack[stack.length - 1]] !== arr[i] &&
    cntObj[arr[stack[stack.length - 1]]] < cntObj[arr[i]]
  ) {
    result[stack.pop()] = arr[i];
  }

  stack.push(i);
}

while (stack.length) {
  result[stack.pop()] = -1;
}

console.log(result.join(" "));
