const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = 0;
for (let i = 1; i < input.length; i++) {
  let str = input[i];
  let tmp = [];
  let bool = true;
  for (let j = 0; j < str.length; j++) {
    if (!tmp.includes(str[j])) {
      tmp.push(str[j]);
    } else {
      if (tmp.length - 1 != tmp.lastIndexOf(str[j])) {
        bool = false;
        break;
      }
    }
  }
  if (bool) {
    result++;
  }
}
console.log(result);
