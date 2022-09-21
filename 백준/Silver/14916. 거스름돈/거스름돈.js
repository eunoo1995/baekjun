let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = +input;

if (num === 1 || num === 3) console.log(-1);
else {
  let cnt = 0;

  cnt += Math.floor(num / 5);
  num = num % 5;

  if (num % 2 !== 0) {
    cnt--;
    num += 5;
  }

  cnt += num / 2;

  console.log(cnt);
}
