const fs = require("fs");
const input = fs
  .readFileSync("/Users/test/Desktop/beakjun/input.txt")
  .toString()
  .trim();

let kg = parseInt(input);

let high = 5;
let mid = 3;
let total = 0;

if (kg % high == 0 || kg % mid == 0) {
  if (kg % high == 0 && kg % mid != 0) {
    total = kg / high;
  } else if ((kg % high) % mid == 0) {
    total = Math.floor(kg / high);
    total += (kg % high) / mid;
  } else {
    total = kg / mid;
  }
} else {
  if ((kg - high) % mid == 0) {
    total = (kg - high) / mid + 1;
  } else {
    total = -1;
  }
}

let count = 0;

while (true) {
  if (kg % 5 === 0) {
    console.log(kg / 5 + count);
    break;
  }

  if (0 > kg) {
    console.log(-1);
    break;
  }

  count++;
  kg -= 3;
}
