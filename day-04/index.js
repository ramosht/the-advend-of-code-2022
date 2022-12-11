const { readFileSync } = require("fs");
const filename = "./input.txt";

const getValues = (item) => {
  const [firstRange, secondRange] = item;
  const startFirst = parseInt(firstRange.split("-")[0]);
  const endFirst = parseInt(firstRange.split("-")[1]);
  const startSecond = parseInt(secondRange.split("-")[0]);
  const endSecond = parseInt(secondRange.split("-")[1]);

  return [startFirst, endFirst, startSecond, endSecond];
};

function part1(pairsRange) {
  let answer = 0;

  pairsRange.map((item) => {
    const [startFirst, endFirst, startSecond, endSecond] = getValues(item);

    if (
      (startFirst <= startSecond && endFirst >= endSecond) ||
      (startFirst >= startSecond && endFirst <= endSecond)
    ) {
      answer++;
    }
  });

  return answer;
}

function part2(pairsRange) {
  let answer = 0;

  pairsRange.map((item) => {
    const [startFirst, endFirst, startSecond, endSecond] = getValues(item);

    if (
      (startFirst <= startSecond && endFirst >= endSecond) ||
      (startFirst >= startSecond && endFirst <= endSecond) ||
      (startFirst <= endSecond && startSecond <= endFirst)
    ) {
      answer++;
    }
  });

  return answer;
}

const input = readFileSync(filename, "utf-8");
const pairsRange = input.split("\n");
const pairsRangeMatrix = pairsRange.map((item) => item.trim().split(","));
console.log("part1", part1(pairsRangeMatrix));
console.log("part2", part2(pairsRangeMatrix));
