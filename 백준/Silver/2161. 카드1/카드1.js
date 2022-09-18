let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let arr = Array.from({ length: +input }, (_, i) => i + 1);
let tmp = [];

while (1) {
  if (arr.length === 1) {
    tmp.push(arr.shift());
    break;
  }
  let [a, b] = arr.splice(0, 2);
  tmp.push(a);
  arr.push(b);
}

console.log(tmp.join(" "));
