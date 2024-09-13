// Create a function for the math.random logic
// Logic of computer's choice Rock, Paper, Scissors
// Create a prompt for user's pick
// Declare scores and a winner.

// Fixing user input (whitespace, uppercase, and lowercase)
const fixInput = function (str) {
  let trimmedStr = str.trim();
  if (typeof trimmedStr !== "string" || trimmedStr.length === 0)
    return "Wrong input";
  return trimmedStr[0].toUpperCase() + trimmedStr.slice(1).toLowerCase();
};

// Checking if the input is valid
const isValid = function (choice) {
  const validChoices = ["Rock", "Paper", "Scissors"];
  return validChoices.includes(choice);
};

const getHumanChoice = function () {
  let humanInput;
  let fixedHumanInput;

  // Added not to break the game if the input is wrong
  do {
    humanInput = prompt(
      "Enter your choice: Rock, Paper, or Scissors (The input is not case sensitive)"
    );
    fixedHumanInput = fixInput(humanInput);
  } while (!isValid(fixedHumanInput));

  return fixedHumanInput;
};

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

// Function to play the entire game for 5 rounds
const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  alert(
    `Game is starting. You will play 5 rounds. Whoever has the most points wins.`
  );

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1} 🥷`);
    const humanChoice = getHumanChoice(); // Get human choice
    const computerChoice = getComputerChoice(); // Get computer choice

    // Getting the message of each choice to the console
    // This might also get activated if I want to see who played what in details//
    // console.log(`You play: ${humanChoice}`);
    // console.log(`Computer plays: ${computerChoice}`);
    const message = getMessage(humanChoice, computerChoice);
    console.log(message);

    // Selecting the outcome
    const outcomeSelection = getOutcome(humanChoice, computerChoice);

    // Logging the scores into the console
    if (outcomeSelection === "Win") {
      humanScore++;
    } else if (outcomeSelection === "Lose") {
      computerScore++;
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(`You won! 🏆`);
  } else if (computerScore > humanScore) {
    console.log(`You lost. 😔`);
  } else {
    console.log(`It's a draw. 🤝`);
  }
};

playGame();
