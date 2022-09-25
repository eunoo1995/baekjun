let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

let tmp = input.map((item) => {
  let [name, dd, mm, yy] = item.split(" ");
  return [name, yy + (+mm < 10 ? mm.padStart(2, "0") : mm) + (+dd < 10 ? dd.padStart(2, "0") : dd)];
});

tmp.sort((a, b) => a[1] - b[1]);

console.log(tmp[tmp.length - 1][0]);
console.log(tmp[0][0]);
