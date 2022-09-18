let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

const n = +input;
let tmp = 0;
let cnt = 1;

while (1) {
  tmp += cnt;
  if (n - tmp <= cnt) break;
  cnt++;
}

console.log(cnt);
