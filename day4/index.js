const fs = require("fs");
const input = fs.readFileSync("day4/input.txt", "utf8");

let validPassports = 0;
let part1 = 0;

input.split("\n\n").forEach(entry => {
  let passport = [];

  entry.match(/([a-z]){3}:\S*/g).forEach(field => {
    passport.push([field.slice(0, 3), field.slice(4)]);
  });

  let validFields = 0;

  passport.forEach((field, index) => {
    switch (field[0]) {
      case "byr":
        field[1] >= 1920 && field[1] <= 2002 ? field.push(true) : field.push(false);
        break;
      case "iyr":
        field[1] >= 2010 && field[1] <= 2020 ? field.push(true) : field.push(false);
        break;
      case "eyr":
        field[1] >= 2020 && field[1] <= 2030 ? field.push(true) : field.push(false);
        break;
      case "hgt":
        if (field[1].endsWith("cm") || field[1].endsWith("in")) {
          let height = parseInt(field[1].slice(0, field[1].length - 2));
          (field[1].endsWith("cm") && height >= 150 && height <= 193) || (field[1].endsWith("in") && height >= 59 && height <= 76) ? field.push(true) : field.push(false);
        } else {
          field.push(false);
        }
        break;
      case "hcl":
        field[1].match(/#(?:[0-9a-f]{6})/g) !== null ? field.push(true) : field.push(false);
        break;
      case "ecl":
        field[1] === "amb" ||
          field[1] === "blu" ||
          field[1] === "brn" ||
          field[1] === "gry" ||
          field[1] === "grn" ||
          field[1] === "hzl" ||
          field[1] === "oth"
          ? field.push(true) : field.push(false);
        break;
      case "pid":
        field[1].length === 9 && field[1].match(/\d{9}/g) !== null ? field.push(true) : field.push(false);
        break;
      case "cid":
        passport.splice(index, 1);
        break;
    }

    field[2] ? validFields++ : null;
  });

  // console.log(validFields);
  // console.log(passport);
  validFields === 7 ? validPassports++ : null;

  passport.length === 7 ? part1++ : null;

  passport.forEach(field => {
    // whyyyyyyyy this literallly makes no sense this should not print anything there is no way and it is so random
    field[2] === undefined ? console.log(field) : null;
  })
})

console.log(part1);
// should be 235
console.log(validPassports);
// it's 194, no idea why not