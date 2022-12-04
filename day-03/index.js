const filename = "./input.txt";
const { Console } = require("console");
const { readFileSync } = require("fs");

const alphabetLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getSumOfRepeatedItems(rucksacks) {
  let sum = 0;

  rucksacks.map((rucksack) => {
    let sumCurrentRucksack = 0;
    const rucksackSize = rucksack.length;
    let firstRucksackHalf = rucksack.slice(0, rucksackSize / 2);
    let secondRucksackHalf = rucksack.slice(rucksackSize / 2);
    let repeatedItems = [];

    firstRucksackHalf.split("").map((firstRucksackHalfItem) => {
      if (
        secondRucksackHalf.includes(firstRucksackHalfItem) &&
        !repeatedItems.includes(firstRucksackHalfItem)
      ) {
        sumCurrentRucksack +=
          alphabetLetters.indexOf(firstRucksackHalfItem) + 1;
        repeatedItems.push(firstRucksackHalfItem);
      }
    });

    sum += sumCurrentRucksack;
  });

  return sum;
}

function getCommonGroupBadge(rucksacks) {
  let sumCommonBadges = 0;

  for (let rucksack = 0; rucksack < rucksacks.length; rucksack++) {
    let firstRucksack = rucksacks[rucksack];
    let secondRucksack = rucksacks[++rucksack];
    let thirdRucksack = rucksacks[++rucksack];

    for (
      let firstRucksackItem = 0;
      firstRucksackItem < firstRucksack.length;
      firstRucksackItem++
    ) {
      const currentItem = firstRucksack[firstRucksackItem];

      const secondRucksackIncludesItem = secondRucksack.includes(currentItem);

      const thirdRucksackIncludesItem = thirdRucksack.includes(currentItem);

      if (secondRucksackIncludesItem && thirdRucksackIncludesItem) {
        console.log(currentItem);
        sumCommonBadges += alphabetLetters.indexOf(currentItem) + 1;
        break;
      }
    }
  }

  return sumCommonBadges;
}

const rucksacksRaw = readFileSync(filename, "utf-8");
const rucksacks = rucksacksRaw.split("\n");

console.log(getCommonGroupBadge(rucksacks));
