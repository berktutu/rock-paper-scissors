const btn = document.querySelectorAll(".btn");
const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".computer-score");
const btnPlayAgain = document.querySelector(".btn-play-again");
const gameMessage = document.querySelector(".game-message");
const gameInfo = document.querySelector(".game-info");

// Generating number between 1-3 for computer choice
const generateNumber = function (min, max) {
  const generatedNum = Math.floor(Math.random() * (max - min + 1) + min);
  return generatedNum;
};

// Computer choice functionality
const choices = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

const getComputerChoice = function () {
  const propertyValue = generateNumber(1, 3);
  const computerChoice = choices[propertyValue];
  return computerChoice;
};

// Getting the outcome with possibilities of win, lose, and draw
const outcomes = {
  Rock: { Paper: "Lose", Scissors: "Win", Rock: "Draw" },
  Paper: { Rock: "Win", Scissors: "Lose", Paper: "Draw" },
  Scissors: { Rock: "Lose", Paper: "Win", Scissors: "Draw" },
};

function getOutcome(humanOutcome, computerOutcome) {
  return outcomes[humanOutcome][computerOutcome];
}

// Function for console message depending on the outcome
function getMessage(humanOutput, computerOutput) {
  const outcome = getOutcome(humanOutput, computerOutput);
  if (outcome === "Lose") {
    return `You ${outcome}! ${computerOutput} beats ${humanOutput}`;
  }
  if (outcome === "Win") {
    return `You ${outcome}! ${humanOutput} beats ${computerOutput}`;
  } else {
    return `It's a Draw!`;
  }
}

const resetGame = function () {
  humanScore = 0;
  computerScore = 0;
};

let humanScore = 0;
let computerScore = 0;
const winScore = 5;

// Function to play the entire game for 5 rounds
const playGame = function (humanChoice) {
  if (humanScore >= winScore || computerScore >= winScore) {
    return;
  }

  const computerChoice = getComputerChoice(); // Get computer choice

  // Getting the message of each choice to the console
  // This might also get activated if I want to see who played what in details//
  // console.log(`You play: ${humanChoice}`);
  // console.log(`Computer plays: ${computerChoice}`);
  const message = getMessage(humanChoice, computerChoice);

  // Selecting the outcome
  const outcomeSelection = getOutcome(humanChoice, computerChoice);

  // Logging the scores into the console
  if (outcomeSelection === "Win") {
    humanScore++;
  } else if (outcomeSelection === "Lose") {
    computerScore++;
  }

  // Render the scores in UI
  if (outcomeSelection === "Win") {
    gameMessage.style.color = "green";
    scorePlayer.textContent = humanScore;
  } else if (outcomeSelection === "Lose") {
    gameMessage.style.color = "red";
    scoreComputer.textContent = computerScore;
  } else {
    gameMessage.style.color = "black";
  }

  // Render the message in UI
  gameMessage.textContent = message;
  gameInfo.style.display = "block";

  if (humanScore >= winScore || computerScore >= winScore) {
    if (humanScore > computerScore) {
      gameMessage.textContent = "You won! 🏆";
      return;
    } else {
      gameMessage.textContent = "You lost. 😔";
      return;
    }
  }
};

btn.forEach((button) =>
  button.addEventListener("click", function () {
    const humanChoice = button.textContent; // Get the text content of the clicked button (human choice)
    playGame(humanChoice); // Start the game with the human choice
  })
);

btnPlayAgain.addEventListener("click", function () {
  gameMessage.textContent = "";
  // Resetting the text content of scores
  scorePlayer.textContent = "0";
  scoreComputer.textContent = "0";
  resetGame();
});
