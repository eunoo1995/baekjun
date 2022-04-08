const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

let amount = Number(input[0].split(" ")[0]);
let sumMax = Number(input[0].split(" ")[1]);

let arr = input[1].split(" ");

let tmp = [];
for (let i = 0; i < arr.length; i++) {
  let a = Number(arr[i]);
  for (let j = i + 1; j < arr.length; j++) {
    let b = Number(arr[j]);
    for (k = j + 1; k < arr.length; k++) {
      let c = Number(arr[k]);
      tmp.push(a + b + c);
    }
  }
}

let result = tmp.filter((el) => el <= sumMax);

console.log(Math.max(...result));
