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
  .slice(1)[0]
  .split(" ")
  .map(Number);

const length = input.length;
const result = [];
const stack = [];

for (let i = 0; i < length; i++) {

  while (stack && input[stack[stack.length - 1]] < input[i]) {
    result[stack.pop()] = input[i];
  }

  stack.push(i);
}


while (stack.length) {
  result[stack.pop()] = -1;
}

console.log(result.join(" "));
