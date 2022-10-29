let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [row, cul] = input.shift().split(" ");

input.shift();

const cutArr = input.map((item) => item.split(" "));

const rowArr = [0, +row];
const culArr = [0, +cul];

cutArr.forEach((item) => {
  item[0] === "1" ? rowArr.push(+item[1]) : culArr.push(+item[1]);
});

rowArr.sort((a, b) => b - a);
culArr.sort((a, b) => b - a);

const calcArr = (arr) => {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i - 1] - arr[i]);
  }

  return result;
};

const maxWidth = Math.max(...calcArr(rowArr));
const maxHeigth = Math.max(...calcArr(culArr));

console.log(maxHeigth * maxWidth);
