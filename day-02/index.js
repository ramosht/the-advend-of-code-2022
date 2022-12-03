const { readFileSync } = require("fs");
const filename = "./input.txt";

// Opponent
// Rock - A
// Paper - B
// Scissor - C

// Mine
// Rock - X - 1
// Paper - Y - 2
// Scissor - Z - 3

function compareResults(opponentPlay, myPlay) {
  let matchScore = 0;

  switch (opponentPlay) {
    case "A":
      if (myPlay === "X") matchScore += 1 + 3;
      if (myPlay === "Y") matchScore += 2 + 6;
      if (myPlay === "Z") matchScore += 3 + 0;
      break;

    case "B":
      if (myPlay === "X") matchScore += 1 + 0;
      if (myPlay === "Y") matchScore += 2 + 3;
      if (myPlay === "Z") matchScore += 3 + 6;
      break;

    case "C":
      if (myPlay === "X") matchScore += 1 + 6;
      if (myPlay === "Y") matchScore += 2 + 0;
      if (myPlay === "Z") matchScore += 3 + 3;
      break;
  }

  return matchScore;
}

function getTotalScore(games) {
  let score = 0;

  games.map((game) => {
    const [opponentPlay, myPlay] = game.split(" ");
    score += compareResults(opponentPlay, myPlay);
  });

  return score;
}

const gamesRaw = readFileSync(filename, "utf-8");
const games = gamesRaw.split("\n");
console.log(getTotalScore(games));
