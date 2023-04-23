
let playerScore = 0; 
let computerScore = 0; 

let playerSelection;
let computerSelection;
let result; 
let tie = 'It is a tie!';
let playerWin = 'You win!';
let computerWin = 'You lose!';

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', toggleModal);
function toggleModal() {
  modal.classList.toggle('show-modal');
}


// Create function called getComputerChoice

function getComputerChoice() {
  const array = ['rock', 'paper', 'scissors'];
  let choice = array[Math.floor(Math.random() * array.length)];
  return choice;
}

// Add function to button
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', function () {return playerSelection = 'rock';});
rockBtn.addEventListener('click', playRound);

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', function () {return playerSelection = 'paper';});
paperBtn.addEventListener('click', playRound);

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', function () {return playerSelection = 'scissors';});
scissorsBtn.addEventListener('click', playRound);


// Main game
function playRound(playerSelection, computerSelection) { 
computerSelection = getComputerChoice();
playerSelection = playerSelection.target.className; 
  
if ((playerSelection === 'rock' && computerSelection === 'rock') || 
  (playerSelection === 'scissors' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'paper')){
    result = tie;}
  
  if ((playerSelection === 'scissors' && computerSelection === 'paper') || 
  (playerSelection === 'rock' && computerSelection === 'scissors') || 
  (playerSelection === 'paper' && computerSelection === 'rock')){
    playerScore++; 
    result = playerWin + ` ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;}

  else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
  (playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'rock')){
    computerScore++; 
    result = computerWin + ` ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;}
  
// Update scores 
document.querySelector('.playerScore').innerText = playerScore;
document.querySelector('.computerScore').innerText = computerScore;
document.querySelector('.computerChoice').innerText = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
document.querySelector('.result').innerText = result;

// Code to end game
if (playerScore === 5){
  toggleModal();
  document.querySelector('.modal-content > h1').innerText = "You beat the computer!"
  playerScore = 0;
  computerScore = 0; 
}else if (computerScore === 5){
  toggleModal();
  document.querySelector('.modal-content > h1').innerText = "The computer beat you!"
  playerScore = 0;
  computerScore = 0;
}else if (computerScore === 5 && playerScore ===5){
  toggleModal();
  document.querySelector('.modal-content > h1').innerText = "You tied the computer!"
  playerScore = 0;
  computerScore = 0;
}


}




    
  



