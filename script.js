const choice = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
  return choice[(Math.floor(Math.random()*3))]
};

function getHumanChoice() {
    return (prompt("Please Enter Your choice: ['rock', 'paper', 'scissors'] ")).toLowerCase()
};


function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Tie")
  } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
    console.log(`You Won! ${humanChoice} beats ${computerChoice}`)
    humanScore++;
  } else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
    computerScore++;
  }

  console.log(`Score --> You: ${humanScore} | Computer ${computerScore}`)

};

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

}
