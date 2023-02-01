let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim()
  .split(":");

const solution = (a, b) => {
  let gcd = 1;
  const max = Math.max(a, b);
  for (let i = 1; i <= max; i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  console.log(`${a / gcd}:${b / gcd}`);
};

solution(...input);
