const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let num = Number(input);
let str = "";

function PaintStar(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += "*";
    } else {
      PaintStar(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    PaintStar(i, j);
  }
  if (i !== num - 1) {
    str += "\n";
  }
}
console.log(str);
