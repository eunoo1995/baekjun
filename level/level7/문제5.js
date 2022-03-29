const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
for (let i = 1; i < input.length; i++) {
  arr = input[i].split(" ");
  let h = parseInt(arr[0]);
  let num = parseInt(arr[2]);
  let y = num % h;
  if (y == 0) y = h;
  let x = Math.ceil(num / h);
  if (x < 10) x = "0" + x;

  result = y + x;
  console.log(result);
}
