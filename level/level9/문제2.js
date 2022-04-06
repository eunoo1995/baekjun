const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = Number(input);

const answer = function (n) {
  if (n == 0) {
    return 0;
  } else if (n <= 1) {
    return 1;
  }

  return answer(n - 1) + answer(n - 2);
};

console.log(answer(num));
