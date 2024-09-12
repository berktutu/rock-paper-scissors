// Create a function for the math.random logic
// Logic of computer's choice Rock, Paper, Scissors
// It should be a function so it returns one of the above.
// Create a prompt for user's pick
// Declare scores

// Computer Choice and Human Choice Logic //

// Fixing user input (whitespace, uppercase and lowercase)
const fixInput = function (str) {
  let trimmedStr = str.trim();
  if (typeof trimmedStr !== "string" || trimmedStr.length === 0)
    return "Wrong input";
  return trimmedStr[0].toUpperCase() + trimmedStr.slice(1).toLowerCase();
};

const getHumanChoice = function () {
  const humanInput = prompt(
    "Enter your choice: Rock, Paper, or Scissors (The input is not case sensetive)"
  );
  const fixedHumanInput = fixInput(humanInput);
  const inputLog = "Your choice:" + " " + fixedHumanInput;
  console.log(inputLog);
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
  // Getting the choice according to property name.
  console.log(`Computer's choice: ${computerChoice}`);
  return computerChoice;
};

// Game Logic //
let humanScore = 0;
let computerScore = 0;
// Getting the values of the function
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Getting the outcome with possibilites of win, lose and draw
const outcomes = {
  Rock: { Paper: "Lose", Scissors: "Win", Rock: "Draw" },
  Paper: { Rock: "Win", Scissors: "Lose", Paper: "Draw" },
  Scissors: { Rock: "Lose", Paper: "Win", Scissors: "Draw" },
};
function getOutcome(humanOutcome, computerOutcome) {
  const outcome = outcomes[humanOutcome][computerOutcome];
  return outcome;
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

// Selecting the outcome
const outcomeSelection = getOutcome(humanSelection, computerSelection);

// Function to play the entire game. The game should have 5 rounds
const playGame = function () {
  // Round function calling the getMessage function to declare who wins
  function playRound(humanChoice, computerChoice) {
    // Getting the message of each choice to the console
    console.log(getMessage(humanChoice, computerChoice));

    // Logging the scores into the console
    if (outcomeSelection === "Win") {
      humanScore++;
    } else if (outcomeSelection === "Lose") {
      computerScore++;
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }
  playRound(humanSelection, computerSelection);
};

playGame();
