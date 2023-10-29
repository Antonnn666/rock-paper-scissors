const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options.at(Math.random() * 3);
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return `It's a tie! You both selected ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else return `You lose :(! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = prompt("Select rock, paper or scissors:").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));