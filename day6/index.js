const fs = require("fs");
const input = fs.readFileSync("day6/input.txt", "utf8");

let part1 = 0, part2 = 0;

input.split("\n\n").forEach(val => { part1 += [...new Set(val.replace(/\n/g, "").split("").sort().join(""))].join("").length });

let groups = input.split("\n\n").map(val => val.split("\n").map(person => person.split("")));
groups.forEach(person => part2 += person.reduce((result, curr) => curr.filter(currentItem => result.indexOf(currentItem) !== -1)).join("").length);

console.log(part1);
console.log(part2);