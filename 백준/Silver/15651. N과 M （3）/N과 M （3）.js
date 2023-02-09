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
  const result = getPermutations(arr, m)
    .map((item) => item.join(" "))
    .join("\n");
  console.log(result);
};

const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const permutations = getPermutations(origin, num - 1);

    const attached = permutations.map((v) => [fixed, ...v]);

    results.push(...attached);
  });

  return results;
};

solution(...input);
