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
  .slice(1);

const solution = (arr) => {
  const stack = [];
  let result = "";
  arr.forEach((commend) => {
    const [a, b] = commend.split(" ");
    const length = stack.length;
    switch (a) {
      case "push":
        stack.push(b);
        break;
      case "pop":
        result += (length !== 0 ? stack.pop() : -1) + "\n";
        break;
      case "size":
        result += length + "\n";
        break;
      case "empty":
        result += (length > 0 ? 0 : 1) + "\n";
        break;
      case "top":
        result += (length !== 0 ? stack[length - 1] : -1) + "\n";
        break;
      default:
    }
  });
  console.log(result.trim());
};

solution(input);
