// Return the winner of a Rock, Paper, Scissors game.
const winningMoves = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const validMoves = new Set(Object.keys(winningMoves));

const rps = (p1, p2) => {
  if (!validMoves.has(p1) || !validMoves.has(p2)) {
    throw new Error("Moves must be rock, paper, or scissors.");
  }

  if (p1 === p2) return "Draw!";
  return winningMoves[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

console.log(rps("rock", "rock"));
