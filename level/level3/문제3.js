const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString();

const n = parseInt(input);

let answer = function (n) {
  let result = 0;
  for (i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);
};

answer(n);
