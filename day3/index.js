const fs = require("fs");
const input = fs.readFileSync("day3/input.txt", "utf8");

const toboggans = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

const trees = [];

toboggans.forEach(toboggan => {
  trees.push(0);
  let x = 0
  let y = 0;

  let map = input.split("\n");

  while (y < map.length) {
    map[y][x % map[y].length] === "#" ? trees[trees.length - 1]++ : null;

    x += toboggan[0];
    y += toboggan[1];
  }

});

console.log(trees[1]);
console.log(trees.reduce((c, tree) => c * tree, 1));
