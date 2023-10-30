let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const resultsDiv = document.querySelector('#results');

const options = ["rock", "paper", "scissors"];

rock.addEventListener('click', () => {
    playGame(options[0]);
})
paper.addEventListener('click', () => {
    playGame(options[1]);
})
scissors.addEventListener('click', () => {
    playGame(options[2]);
})


function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerScore += 1;
    } else {
        return computerScore += 1;
    }
}

function playGame(playerSelection) {

    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection)

    const displayScores = document.createElement('p');
    displayScores.textContent = `Your score: ${playerScore} - Computer score: ${computerScore}`;
    resultsDiv.appendChild(displayScores);

    if(playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            displayScores.textContent = "YOU WON THE GAME";
        } else {
            displayScores.textContent = "YOU LOST THE GAME";
        }
        playedRounds = 0;
        playerScore = 0;
        computerScore = 0;
    }
    playedRounds++;
}