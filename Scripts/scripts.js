// create a computerPlay() function to select Rock, Paper, Scissors
let list = ['rock', 'paper', 'scissors'];
function computerPlay() {
    choice = list[Math.floor(Math.random()*3)]; 
    return choice;
}
// play one round of Rock Paper Scissors and return a winner. 


function playRound(choice) {
    let computerChoice = computerPlay();
    if (choice === 'reset') {
        playerScore = 0;
        compScore = 0;
        message.textContent = "Scores reset - ready to start again!"
    } else if (computerChoice === choice) {
        message.textContent = "You both chose " + choice + ", it's a tie!  Try again."
        //return 'tie'
    } else if ((choice === 'rock' && computerChoice === 'scissors') || (choice === 'paper' && computerChoice === 'rock') || (choice === 'scissors' && computerChoice === 'paper')) {
        message.textContent = choice + " beats " + computerChoice + "!  YOU WIN!"
        playerScore++
        //return 'win'
    } else {
        message.textContent = choice + " loses to " + computerChoice + ".  Better luck next time!"
        compScore++
        //return 'lose'
    }
}
/* removing the below as player selection will be made with buttons
// get the player choice and make sure it's a valid one
function getPlayerChoice() {
    let playerSelection = prompt("Make your choice").toLowerCase();
    if (list.includes(playerSelection)) {
        return playerSelection;
    } else {
        alert("Try again! Must be rock, paper, or scissors")
        return getPlayerChoice();
    }

}
*/
// New updates for interactive RPS game. 
let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
const message = document.querySelector('#message');
message.textContent = ''

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        //console.log(button.id);
        if(button.id === 'reset') {
            playerScore = 0;
            compScore = 0;
            message.textContent = "Scores reset - ready to start again!"            
        }
        if (playerScore < 5 && compScore < 5) {
            playRound(button.id);
        }
        score.textContent = "The current score is:  Player - " + playerScore + ". Computer - " + compScore
        if (playerScore === 5) {
            score.textContent += "  Congratulations!  You win the game!"
        }
        if (compScore === 5) {
            score.textContent += "  Bow to your robot overlord, human! ";
        }
        
    });
});



// function to play 5 rounds of the game and show a final score/declare winner. 
/* removing 5 round game to replace with score up to 5. 
function playRPS() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; ++round){
        turn = playRound();
        if (turn == 'win') {
            ++playerScore
            console.log("The score is: player " + playerScore + ", computer " + computerScore)
        } else if (turn == 'lose') {
            ++computerScore
            console.log("The score is: player " + playerScore + ", computer " + computerScore)
        } else {
            console.log("The score is: player " + playerScore + ", computer " + computerScore)
        }
    }
    if (playerScore > computerScore) {
        console.log("After 5 rounds, the score is: player " + playerScore + ", computer " + computerScore +  ". YOU WIN!")
    } else if (playerScore < computerScore) {
        console.log("After 5 rounds, the score is: player " + playerScore + ", computer " + computerScore + ". The computer won! :-(")
    } else {
        console.log("After 5 rounds, it's a TIE!")
    }
}
*/
