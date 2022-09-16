let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

const obj = {};

let str = input.replace(/9/g, "6");

[...str].forEach((item) => {
  obj[item] = (obj[item] || 0) + 1;
});

obj["6"] && (obj["6"] = Math.ceil(obj["6"] / 2));

console.log(Math.max(...Object.values(obj)));
