const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split(" ");

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);
const num3 = parseInt(input[2]);

answer(num1, num2, num3);

function answer(a, b, c) {
  let result = 0;
  if (a == b && b == c && a == c) {
    result = 10000 + a * 1000;
  } else if ((a == b && a != c) || (a == c && a != b)) {
    result = 1000 + a * 100;
  } else if (b == c && a != b) {
    result = 1000 + b * 100;
  } else {
    result = Math.max(a, b, c) * 100;
  }
  console.log(result);
}
