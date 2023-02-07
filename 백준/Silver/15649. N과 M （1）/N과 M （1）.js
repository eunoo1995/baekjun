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
  const permu = getPermutations(arr, m);
  permu.forEach((item) => console.log(item.join(" ")));
};

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

solution(...input);
