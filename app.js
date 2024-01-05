function getComputerChoice(){
    let moves = ['ROCK','PAPER','SCISSORS']
    let computerMove = moves[Math.floor(Math.random() * (2 + 1) )];
    return computerMove
}

getComputerChoice()