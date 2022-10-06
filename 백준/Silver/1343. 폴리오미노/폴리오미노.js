let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

if (!input.split(/\.+/g).every((item) => item.length % 2 === 0)) console.log(-1);
else console.log(input.replace(/XXXX/g, "AAAA").replace(/XX/g, "BB"));
