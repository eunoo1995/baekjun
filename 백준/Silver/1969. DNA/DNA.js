let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

result = [];

for (let i = 0; i < input[0].length; i++) {
  let obj = {};
  for (let j = 0; j < input.length; j++) {
    obj[input[j][i]] = (obj[input[j][i]] || 0) + 1;
  }
  const max = Math.max(...Object.values(obj));

  const str = Object.keys(obj).filter((key) => obj[key] === max);

  result.push(str.sort()[0]);
}

result = result.join("");

let cnt = 0;

input.forEach((item) => {
  for (let i = 0; i < item.length; i++) {
    item[i] !== result[i] && cnt++;
  }
});

console.log(result);
console.log(cnt);
