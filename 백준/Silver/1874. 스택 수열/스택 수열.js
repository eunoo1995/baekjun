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
  .map(Number);

const solution = (input) => {
  let result = "";
  const [n, ...target] = input;
  const arr = Array.from({ length: n }).map((_, i) => i + 1);
  const stack = [];

  let idx = 0;
  while (1) {
    if (arr.length === 0) break;
    if (target[idx] === stack[stack.length - 1]) {
      idx++;
      stack.pop();
      result += "-\n";
    } else {
      stack.push(arr.shift());
      result += "+\n";
    }
  }
  if (target.slice(idx).join("") === stack.reverse().join("")) {
    result += "-\n".repeat(stack.length);
    console.log(result.trim());
  } else {
    console.log("NO");
  }
};

solution(input);
