// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt", "utf8")
  .toString()
  .split("\n");

const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > 0 && y > 0) console.log(1);
else if (x < 0 && y > 0) console.log(2);
else if (x < 0 && y < 0) console.log(3);
else if (x > 0 && y < 0) console.log(4);
