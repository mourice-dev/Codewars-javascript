// Return the winner of a Rock, Paper, Scissors game.
const winningMoves = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  return winningMoves[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

console.log(rps("rock", "rock"));
