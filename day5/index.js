const fs = require("fs");
const input = fs.readFileSync("day5/input.txt", "utf8");

let seatList = [];

let highestSeatId, lowestSeatId;

function getSeatInfo(seat) {
  let row = parseInt(seat.slice(0, 7).replace(/F/g, "0").replace(/B/g, "1"), 2);
  let column = parseInt(seat.slice(7).replace(/L/g, "0").replace(/R/g, "1"), 2);
  let seatId = row * 8 + column

  return { row, column, seatId };
}

seatList = input.split("\n").map(seat => getSeatInfo(seat)).map(seat => seat.seatId);
seatList.sort();

highestSeatId = Math.max(...seatList);
lowestSeatId = Math.min(...seatList);

let missingSeat = seatList.reduce(function (acc, cur, ind, arr) {
  var diff = cur - arr[ind - 1];
  if (diff > 1) {
    var i = 1;
    while (i < diff) {
      acc.push(arr[ind - 1] + i);
      i++;
    }
  }
  return acc;
}, []);

console.log(highestSeatId, lowestSeatId);
console.log(missingSeat);
