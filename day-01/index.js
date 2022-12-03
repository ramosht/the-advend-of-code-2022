const { readFileSync } = require("fs");
const filename = "./input.txt";

function getStrongestElfCalories(elves) {
  let strongestElfCalories = null;
  elves.map((elf) => {
    const allCalories = elf.reduce((a, b) => Number(a) + Number(b), 0);
    if (allCalories > strongestElfCalories) strongestElfCalories = allCalories;
  });

  return strongestElfCalories;
}

const content = readFileSync(filename, "utf-8");
const elvesCaloriesWithLineBreakers = content.split("\n\n");
const elves = elvesCaloriesWithLineBreakers.map((elf) => elf.split("\n"));
console.log(getStrongestElfCalories(elves));
