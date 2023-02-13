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
  .slice(1)
  .map(Number);

const solution = (arr) => {
  const stack = [];
  arr.forEach((num) => {
    num > 0 ? stack.push(num) : stack.pop();
  });

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
};

solution(input);
