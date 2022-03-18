const fs = require("fs");
const inputData = fs
  .readFileSync("/Users/test/Desktop/beakjun/level/level1/10926.txt", "utf8")
  .toString();

console.log(inputData + "??!");

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
