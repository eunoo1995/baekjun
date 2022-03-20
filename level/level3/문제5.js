const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString();

let num = parseInt(input);
let result = "";
for (let i = 1; i <= num; i++) {
  result += i + "\n";
}
console.log(result);
