let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim();

let cnt = 0;

const solution = (arr) => {
  if (arr.length === 1) {
    console.log(`${cnt}
${arr[0] % 3 === 0 ? "YES" : "NO"}`);
    return;
  }
  const sum = arr.reduce((acc, cur) => +acc + +cur, 0);

  cnt++;
  if ((sum + "").length === 1) {
    console.log(`${cnt}
${sum % 3 === 0 ? "YES" : "NO"}`);
    return;
  }

  solution([...(sum + "")]);
};

solution([...input]);
