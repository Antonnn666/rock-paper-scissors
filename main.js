let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options.at(Math.random() * 3);
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log(`It's a tie! You both selected ${playerSelection}`)
        return;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log( `You win! ${playerSelection} beats ${computerSelection}`)
        return playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerScore += 1;
    } else {
        console.log(`You lose :(! ${computerSelection} beats ${playerSelection}`)
        return computerScore += 1;
    }
}

function playGame() {

    let i = 0;

    while (i < 5) {
        const playerSelection = prompt("Select rock, paper or scissors:").toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        console.log(`Your score: ${playerScore} - Computer score: ${computerScore}`)
        if (result == undefined) {
            continue;
        }
        i++;
    }

    if (playerScore > computerScore) {
        return console.log(`You win the game with score of ${playerScore} - ${computerScore}`);
    } else return console.log(`You lost the game with score of ${playerScore} - ${computerScore}`);

}

playGame();