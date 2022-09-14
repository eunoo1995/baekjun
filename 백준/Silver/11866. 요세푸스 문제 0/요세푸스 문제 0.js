let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split(" ");

let arr = Array.from({ length: input[0] }, (_, i) => i + 1);
let target = input[1] - 1;

let result = [];
while (arr.length > 0) {
  let cnt = target % arr.length;
  if (cnt === 0) result.push(arr.splice(cnt, 1));
  else {
    let tmp = arr.splice(0, cnt);
    arr = [...arr, ...tmp];
    result.push(arr.shift());
  }
}
console.log(`<${result.join(", ")}>`);
