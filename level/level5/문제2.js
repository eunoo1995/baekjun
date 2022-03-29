const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = parseInt(input);

function hansu(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i < 100) {
      arr.push(i);
      continue;
    }
    let str = i + "";
    let dis1 = parseInt(str[0]) - parseInt(str[1]);
    let dis2 = parseInt(str[1]) - parseInt(str[2]);

    if (dis1 == dis2) arr.push(i);
  }
  return arr.length;
}

console.log(hansu(num));
