let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

const solution = (input) => {
  let result = [];
  input.forEach((item) => {
    result.push(item.match(/[aeiou]/gi)?.length || 0);
  });

  return result;
};

console.log(solution(input).join("\n"));
