let fs = require("fs");
const { off } = require("process");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

const days = +input[0][1];
const arr = input[1].map((item) => +item);

if (arr.filter((item) => item !== 0).length === 0) console.log("SAD");
else {
  let result = [];
  let num = 0;
  for (let i = 0; i < arr.length - days + 1; i++) {
    if (i === 0) {
      for (let j = 0; j < days; j++) {
        num += arr[j];
      }
    } else {
      num -= arr[i - 1];
      num += arr[i + days - 1];
    }
    result.push(num);
  }

  let max = Math.max(...result);
  let cnt = result.filter((item) => item === max).length;

  console.log(`${max}\n${cnt}`);
}
