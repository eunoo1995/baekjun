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

input.pop();

const solution = (input) => {
  let result = "";
  input.forEach((str) => {
    const matchs = str.match(/\(|\)|\[|\]/g);
    if (matchs === null) result += "yes\n";
    else {
      const stack = [matchs[0]];
      for (let i = 1; i < matchs.length; i++) {
        if (
          stack.length === 0 ||
          ((stack[stack.length - 1] === "(" ||
            stack[stack.length - 1] === "[") &&
            (matchs[i] === "(" || matchs[i] === "["))
        )
          stack.push(matchs[i]);
        else if (stack[stack.length - 1] === "(" && matchs[i] === ")") {
          stack.pop();
        } else if (stack[stack.length - 1] === "[" && matchs[i] === "]") {
          stack.pop();
        } else if (stack[stack.length - 1] === "(" && matchs[i] === "]") {
          break;
        } else if (stack[stack.length - 1] === "[" && matchs[i] === ")") {
          break;
        }
      }
      result += stack.length > 0 ? "no\n" : "yes\n";
    }
  });
  console.log(result.trim());
};

solution(input);
