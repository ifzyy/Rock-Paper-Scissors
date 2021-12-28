function computerPlay () {
    let options = [ 'rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
        
}
    let playerScore = 0
    let compScore = 0


function scoreUpdate() {
    if (playerScore === 5) {
        playerScore && compScore
        return "You've won!!!!";
    
    } else if (compScore === 5) {
        playerScore && compScore
        return "You lose!!!!"
        
    } else { 
        return `${playerScore} - ${compScore}`;
    }
}
   

function playRound(playerSelection, computerSelection){
  

    if (playerSelection === 'rock' && computerSelection === 'scissors'|| 
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            let win =  `congrats You win! ${playerSelection} beats ${computerSelection}`;
            alert(`${win} (${++playerScore}-${compScore})`)
         return scoreUpdate()
         
                 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' ||
    playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ) {
        let lose =  ` You lose yo!  ${computerSelection} beats ${playerSelection}`;
        alert(`${lose} (${playerScore} - ${++compScore})`)
        return scoreUpdate()
        
        
     
} else{
    let tie = `Tie! ${computerSelection} cannot win against ${playerSelection}`;
    alert(tie)
    return scoreUpdate()
}
}


let playgame = confirm("shall we play a game of rock paper scissors")
if(playgame){
    //play
    function game(playerSelection) {
        playerSelection = prompt('choose rock, paper, or scissors')
     let computerSelection = computerPlay();
             alert(computerSelection)
             alert(playRound(playerSelection, computerSelection))

     }
}
else{
   alert("Ok maybe next time") 
}
        

for (let i = 0; i < 5; i++) {
    game()
    
}
   












