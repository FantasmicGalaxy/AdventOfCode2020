const fs = require("fs");
const input = fs.readFileSync("day6/input.txt", "utf8");

let part1 = 0, part2 = 0;

input.split("\n\n").forEach(val => { part1 += [...new Set(val.replace(/\n/g, "").split("").sort().join(""))].join("").length });

// console.log(input.split("\n\n"));

console.log(part1);