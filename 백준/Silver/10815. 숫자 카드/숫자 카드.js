let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let arr1 = input[1]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);
let arr2 = input[3].split(" ").map((item) => +item);
let result = "";

function binarySearch(target, dataArray) {
  let low = 0;
  let high = dataArray.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    if (guess === target) {
      return 1;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return 0;
}
arr2.forEach((item) => {
  result += binarySearch(item, arr1) + " ";
});
console.log(result.trim());
