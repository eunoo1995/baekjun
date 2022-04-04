const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let n = parseInt(input);
let i = 2;
if (n == 2) console.log(2);
else if (n == 3) console.log(3);
while (i * i <= n) {
  if (n % i === 0) {
    console.log(i);
    n = n / i;
  } else {
    i++;
  }
  if (i * i > n) console.log(n);
}
