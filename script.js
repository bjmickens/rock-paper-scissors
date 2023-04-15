// create function called getComputerChoice

function getComputerChoice(arr) {

  const choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;

}

const array = ['Rock', 'Paper', 'Scissors'];

//create function that plays a single round of RPS
//take two parameters - playerSelection and computerSelection
//computerSelection is result of getComputerChoice function 
//playSelection should be prompted and case-insensitive
//return a string that declares the winner of the round 



let playerScore = 0; 
let computerScore = 0; 

let playerSelection = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
let computerSelection = getComputerChoice(array).toLowerCase();

let tie = 'It is a tie!';
let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;


function playRound(playerSelection, computerSelection) { 
   if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'scissors') ||
   (playerSelection === 'paper' && computerSelection === 'paper')) {
    return tie;
   }
  
   else if ((playerSelection === 'scissors' && computerSelection === 'paper') || 
   (playerSelection === 'rock' && computerSelection === 'scissors') || 
   (playerSelection === 'paper' && computerSelection === 'rock')){
    return playerWin;
   }

   else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') ||
   (playerSelection === 'scissors' && computerSelection === 'rock')){
    return computerWin;
   }
   
}


console.log('Computer selected: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));

