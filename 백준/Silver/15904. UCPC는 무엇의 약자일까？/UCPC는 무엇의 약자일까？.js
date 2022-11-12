let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim();

const result = input.replace(/[a-z|' ']/g, "").replace(/[^UCP]/g, "");

console.log(/U.*C.*P.*C/.test(result) ? "I love UCPC" : "I hate UCPC");
