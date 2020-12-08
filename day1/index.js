const fs = require("fs");
const input = fs.readFileSync("day1/input.txt", "utf8").split("\n").map(val => parseInt(val));

let ans1 = 0;
let ans2 = 0;
let dist = input.map((val, index) => Math.abs(val - 1010));
dist.sort((a, b) => a - b);
dist.forEach((val, i) => {
  if (dist[i] === dist[i + 1]) {
    ans1 = 1010 - val;
    ans2 = 1010 + val;
  }
});

console.log(ans1 * ans2);

// i got lazy
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    for (let k = 0; k < input.length; k++) {
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(input[i] * input[j] * input[k])
      }
    }
  }
}
