const options = ["rock", "paper", "scissors"];

function getComputerChoise() {
    return options.at(Math.random() * 3);
}

console.log(getComputerChoise());
