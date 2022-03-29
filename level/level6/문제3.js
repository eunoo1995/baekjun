const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let s = input;

let obj = {};

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  obj[String.fromCharCode(i)] = -1;
}

for (i = 0; i < s.length; i++) {
  if (obj[s[i]] != -1) continue;
  obj[s[i]] = i;
}

console.log(Object.values(obj).join(" "));
