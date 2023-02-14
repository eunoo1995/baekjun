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
  .map((item) => item.split(""));

const solution = (arr) => {
  let result = "";
  arr.forEach((item) => {
    const stack = [item[0]];
    for (let i = 1; i < item.length; i++) {
      if (stack.length === 0) {
        stack.push(item[i]);
      } else if (stack[stack.length - 1] === "(" && item[i] === "(") {
        stack.push(item[i]);
      } else if (stack[stack.length - 1] === "(" && item[i] === ")") {
        stack.pop();
      }
    }
    result += stack.length > 0 ? "NO\n" : "YES\n";
  });
  console.log(result.trim());
};

solution(input);
