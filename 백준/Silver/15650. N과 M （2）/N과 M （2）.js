let fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/test/Desktop/beakjun/input.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

const solution = (n, m) => {
  const arr = Array.from({ length: n }).map((_, i) => i + 1);
  const permu = getCombinations(arr, m);
  permu.forEach((item) => console.log(item.join(" ")));
};

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

solution(...input);
