let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

const arr1 = input.splice(1, input[0][0]);
const arr2 = input.slice(2);

let result = [];
for (let i = 0; i < arr1.length; i++) {
  let tmp = [];
  for (let j = 0; j < arr2[0].length; j++) {
    let num = 0;
    for (let k = 0; k < arr1[i].length; k++) {
      num += arr1[i][k] * arr2[k][j];
    }
    tmp.push(num);
  }
  result.push(tmp);
}

console.log(result.map((item) => item.join(" ")).join("\n"));
