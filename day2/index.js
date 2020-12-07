const fs = require('fs');
const input = fs.readFileSync('day2/input.txt', 'utf8');

let part1 = 0;
let part2 = 0;

input.split("\n").forEach(val => {
  let ruleLetter = val.split(": ")[0].split(" ")[1];
  let ruleMin = val.split(": ")[0].split(" ")[0].split("-")[0];
  let ruleMax = val.split(": ")[0].split(" ")[0].split("-")[1];
  let password = val.split(": ")[1];

  let count = 0;
  password.split("").forEach(letter => {
    letter === ruleLetter ? count++ : null;
  });

  count >= parseInt(ruleMin) && count <= parseInt(ruleMax) ? part1++ : null;

  let checkMin = password[parseInt(ruleMin) - 1] === ruleLetter;
  let checkMax = password[parseInt(ruleMax) - 1] === ruleLetter;

  !(checkMin && checkMax) && (checkMin || checkMax) ? part2++ : null;
});

console.log(part1);
console.log(part2);
