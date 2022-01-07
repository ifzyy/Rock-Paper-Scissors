const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const scoreBoard= document.getElementById('scores')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    let win =  `congrats You win! ${userChoice} beats ${computerChoice}`;
    result = win
    playerScore++
    
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    let lose =  ` You lose yo!  ${computerChoice} beats ${userChoice}`;
    result= lose
    compScore++
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    let win =  `congrats You win! ${userChoice} beats ${computerChoice}`;
    result = win
    playerScore++
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    let lose =  ` You lose yo!  ${computerChoice} beats ${userChoice}`;
    result= lose
    compScore++
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    let win =  `congrats You win! ${userChoice} beats ${computerChoice}`;
    result = win
    playerScore++
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    let lose =  ` You lose yo!  ${computerChoice} beats ${userChoice}`;
    result= lose
    compScore++
  }
  resultDisplay.innerHTML = result
  scoreBoard.innerHTML= scoreUpdate()
}
let playerScore = 0
let compScore = 0


function scoreUpdate() {
if (playerScore === 5) {
    playerScore && compScore
    return "You've won!!!!";

} else if (compScore === 5) {
    playerScore && compScore
    return "You lose motherfucker!!!!"
    
} else { 
    return `${playerScore} - ${compScore}`;
}
}