const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let N = Number(input);
let A = 0;
let B = 1;
let i = 0;

while (N > i) {
  A++;
  i++;

  if (N === i) {
    break;
  }

  while (A > 1) {
    A--;
    B++;
    i++;

    if (N === i) {
      break;
    }
  }

  if (N === i) {
    break;
  }

  B++;
  i++;

  if (N === i) {
    break;
  }

  while (B > 1) {
    B--;
    A++;
    i++;

    if (N === i) {
      break;
    }
  }

  if (N === i) {
    break;
  }
}

console.log(`${A}/${B}`);
