// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];

// references to player, computer, and results
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

// playGame function, handles string input of rock, paper or scissors
/* eslint-disable-next-line */
function playGame(playerChoice) {
  // select a random element from choices array
  const computerChoice = choices[Math.trunc(Math.random() * 3)];
  // console.log(computerChoice); // debug
  console.log(playerChoice);
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultsDisplay.textContent = result;

  resultsDisplay.classList.remove("greenText", "redText");

  //   style elements based on game state
  switch (result) {
    case "YOU WIN!":
      resultsDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
      resultsDisplay.classList.add("redText");
      break;
    // case "IT'S A TIE!":
    //   resultsDisplay.className = "";
    //   break;

    default:
      break;
  }
}
