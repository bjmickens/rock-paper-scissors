
let playerScore = 0; 
let computerScore = 0; 

let playerSelection;
let computerSelection;
let result; 
let tie = 'It is a tie!';
let playerWin = 'You win!';
let computerWin = 'You lose!';


// create function called getComputerChoice

function getComputerChoice() {
  const array = ['rock', 'paper', 'scissors'];
  let choice = array[Math.floor(Math.random() * array.length)];
  return choice;
}

const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', function () {return playerSelection = 'rock';});
rockBtn.addEventListener('click', playRound);

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', function () {return playerSelection = 'paper';});
paperBtn.addEventListener('click', playRound);

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', function () {return playerSelection = 'scissors';});
scissorsBtn.addEventListener('click', playRound);



function playRound(playerSelection, computerSelection) { 
computerSelection = getComputerChoice();
playerSelection = playerSelection.target.className; 
  
if ((playerSelection === 'rockBtn' && computerSelection === 'rock') || 
  (playerSelection === 'scissorsBtn' && computerSelection === 'scissors') ||
  (playerSelection === 'paperBtn' && computerSelection === 'paper')){
    result = tie;}
  
  if ((playerSelection === 'scissorsBtn' && computerSelection === 'paper') || 
  (playerSelection === 'rockBtn' && computerSelection === 'scissors') || 
  (playerSelection === 'paperBtn' && computerSelection === 'rock')){
    playerScore++; 
    result = playerWin + ` ${playerSelection} beats ${computerSelection}`;}

  else if ((playerSelection === 'rockBtn' && computerSelection === 'paper') || 
  (playerSelection === 'paperBtn' && computerSelection === 'scissors') ||
  (playerSelection === 'scissorsBtn' && computerSelection === 'rock')){
    computerScore++; 
    result = computerWin + ` ${computerSelection} beats ${playerSelection}`;}
  
console.log(computerSelection);
console.log(playerSelection);
console.log(result); 
console.log('Player score = ' + playerScore, 'Computer score = ' + computerScore);
document.querySelector('.playerScore').innerText = playerScore;
document.querySelector('.computerScore').innerText = computerScore;
document.querySelector('.computerChoice').innerText = computerSelection;
document.querySelector('.result').innerText = result;

// Code to end game
if (playerScore === 5){
  alert('You win!');
  playerScore = 0;
  computerScore = 0; 
}else if (computerScore === 5){
  alert('You lose!');
  playerScore = 0;
  computerScore = 0;
}else if (computerScore === 5 && playerScore ===5){
  alert ('It is a tie!');
  playerScore = 0;
  computerScore = 0;
}
}




    
  



