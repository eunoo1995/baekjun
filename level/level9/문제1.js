const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = Number(input);

const factorial = function (n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(factorial(num));
