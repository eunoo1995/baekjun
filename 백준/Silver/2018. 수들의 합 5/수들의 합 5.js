let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim();

const solution = (input) => {
  let cnt = 0;
  let sum = 0;

  for (let i = 1; i <= input; i++) {
    for (let j = i; j <= input; j++) {
      sum += j;
      if (sum === input) {
        cnt++;
        sum = 0;
        break;
      }
      if (sum > input) {
        sum = 0;
        break;
      }
    }
  }

  console.log(cnt);
};

solution(+input);
