const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ");
  let len = arr[0];
  let str = arr[1];
  if (str == undefined) continue;
  let result = "";
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < len; k++) {
      result += str[j];
    }
  }
  console.log(result);
}
