let choices = ['rock','paper','scissors']
let player = 0;
let comp = 0;
let scoreUsr = document.getElementById('user')
let ai = document.getElementById('comp')
let result = document.getElementById('result')
let btn = document.querySelectorAll('button')

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == 'rock') {
        if(computerSelection == 'paper') {
            comp+=1
            scoreUsr.textContent = `User score : ${player}`
            ai.textContent = `Computer score : ${comp}`
            result.textContent = 'Computers Win! Paper beat Rock';
        } else if(computerSelection == 'scissors') {
            player+=1
            scoreUsr.textContent = `User score : ${player}`
            ai.textContent = `Computer score : ${comp}`
            result.textContent = 'Player Win Rock beat Scissors!'
        }
    } else if(playerSelection == 'paper') {
        if(computerSelection == 'scissors') {
            comp+=1
            scoreUsr.textContent = `User score : ${player}`
            ai.textContent = `Computer score : ${comp}`
            result.textContent = 'Computers Win Scissors beat Paper'
        } else if(computerSelection == 'rock') {
            player+=1
            scoreUsr.textContent = `User score : ${player}`
            ai.textContent = `Computer score : ${comp}`
            result.textContent = 'Player Win! Paper beat Rock'
        }
    } else if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') {
            comp+=1
            scoreUsr.textContent = `User score : ${player}`
            ai.textContent = `Computer score : ${comp}`
            result.textContent = 'Computers Win! Rock beat Scissors'
        } else if(computerSelection == 'paper') {
            player+=1
            scoreUsr.textContent = `User score : ${player}`
            ai.textContent = `Computer score : ${comp}`
            result.textContent ='Player Win! Scissors beat Paper'
        }
    } else if(playerSelection == computerSelection){
        result.textContent = "It's a tie!"
    } else {
        return
    }
    checkGame();
}


btn.forEach(button => {
    button.addEventListener('click', ()=> {
        if(button.id == 'rock') {
            playRound('rock',getComputerChoice())
        } else if(button.id == 'paper') {
            playRound('paper',getComputerChoice())
        } else if(button.id == 'scissors') {
            playRound('scissors', getComputerChoice())
        }
    }
)})
function checkGame() {
    if(comp == 5 || player == 5) {
        document.getElementById('container').removeChild(result)
        if(comp > player) {
            let hasilGame = document.createElement('p')
            hasilGame.textContent = 'The Winner is Computer!'
            document.getElementById('container').appendChild(hasilGame)
        } else {
            let hasilGame = document.createElement('p')
            hasilGame.textContent = 'The Winner is Player!'
            document.getElementById('container').appendChild(hasilGame)
        }
    }
};
console.log(comp)