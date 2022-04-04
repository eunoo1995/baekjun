const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let cnt = 0;
for (let i = 0; i < input.length; i++) {
  let n = parseInt(input[i]);
  cnt = 0;
  for (let j = n + 1; j <= n * 2; j++) {
    let p = 2;
    if (j == 2) cnt++;
    if (j == 3) cnt++;
    while (p * p <= j) {
      if (j % p === 0) break;
      p++;
      if (p * p > j) cnt++;
    }
  }
  if (cnt != 0) console.log(cnt);
}
