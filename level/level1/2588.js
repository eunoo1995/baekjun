const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/level/level1/2588.txt", "utf8")
  .toString()
  .split("\n");

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

let arr = num2.toString().split("");
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(num1 * arr[i]);
}
console.log(num1 * num2);

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
