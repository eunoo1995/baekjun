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
  .map((item) => item.split(" "));

const solution = (input) => {
  input.forEach((item) => {
    let [a, b] = item;
    let max = a * b;
    let aArr = [];
    let bArr = [];
    let cnt = 1;
    while (1) {
      let multi = a * cnt;
      if (multi > max) {
        cnt = 1;
        break;
      }
      aArr.push(multi);
      cnt++;
    }
    while (1) {
      let multi = b * cnt;
      if (multi > max) {
        cnt = 1;
        break;
      }
      bArr.push(multi);
      cnt++;
    }
    for (let i = 0; i < aArr.length; i++) {
      if (bArr.includes(aArr[i])) {
        console.log(aArr[i]);
        break;
      }
    }
  });
};

solution(input);
