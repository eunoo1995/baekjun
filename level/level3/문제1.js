const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString();

const dan = parseInt(input);

for (i = 1; i <= 9; i++) {
  console.log(`${dan} * ${i} = ${dan * i}`);
}
