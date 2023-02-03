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
  let results = [];
  for (i = Math.ceil(input / 2); i <= input; i++) {
    let arr = [input, i];
    while (true) {
      if (arr[arr.length - 2] - arr[arr.length - 1] < 0) break;
      arr.push(arr[arr.length - 2] - arr[arr.length - 1]);
    }
    results.push(arr);
  }
  console.log(results.sort((a, b) => b.length - a.length)[0].length);
  console.log(results.sort((a, b) => b.length - a.length)[0].join(" "));
};

solution(+input);
