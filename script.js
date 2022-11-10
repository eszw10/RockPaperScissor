let choices = ['rock','paper','scissors']
let player = 0;
let comp = 0;
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock') {
        if(computerSelection == 'paper') {
            comp+=1
            return 'Computers Win! Paper beat Rock'
        } else if(computerSelection == 'scissors') {
            player+=1
            return 'Player Win Rock beat Scissors!'
        }
    } else if(playerSelection == 'paper') {
        if(computerSelection == 'scissors') {
            comp+=1
            return 'Computers Win Scissors beat Paper'
        } else if(computerSelection == 'rock') {
            player+=1
            return 'Player Win! Paper beat Rock'
        }
    } else if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') {
            comp+=1
            return 'Computers Win! Rock beat Scissors'
        } else if(computerSelection == 'paper') {
            player+=1
            return 'Player Win! Scissors beat Paper'
        }
    } else {
        return "It's a tie!"
    }
}

let userInput = '';
function game() {
    for(let i = 0;i<=4;i++) {
        userInput = prompt('Take your weapons! ').toLowerCase();
        console.log(playRound(userInput,getComputerChoice()));
    }
    if(player > comp) {
        console.log('Player is the winner!')
    } else {
        console.log('Computer is the winner!')
    }
}
game();