let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = +input;
let cnt = 0;
while (num >= 5) {
  cnt += Math.floor(num / 5);
  num = Math.floor(num / 5);
}

console.log(cnt);
