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
  .slice(1)
  .map((item) => +item);

const solution = (input) => {
  let arr = [...input];
  let cnt = 0;
  while (1) {
    const max = Math.max(...arr);
    const idx = arr.findIndex((n) => n === max);
    if (arr[0] === max) {
      let unq = true;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] === max) {
          unq = false;
          break;
        }
      }
      if (unq) break;
    }
    arr[0] += 1;
    arr[idx === 0 ? 1 : idx] -= 1;
    cnt++;
  }
  console.log(cnt);
};

solution(input);
