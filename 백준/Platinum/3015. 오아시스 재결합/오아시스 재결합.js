let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [length, ...arr] = input;

let stack = [];
let cnt = 0;

for (let i = 0; i < length; i++) {
  let same = 1;
  // console.log(stack, cnt);
  while (stack.length > 0 && stack[stack.length - 1].value <= arr[i]) {
    cnt += stack[stack.length - 1].same;

    if (stack[stack.length - 1].value === arr[i]) {
      same = stack[stack.length - 1].same + 1;
    } else {
      same = 1;
    }
    stack.pop();
  }
  if (stack.length > 0) cnt++;

  stack.push({ value: arr[i], same });
}

console.log(cnt);
