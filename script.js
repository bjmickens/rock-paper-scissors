
let playerScore = 0; 
let computerScore = 0; 

let playerSelection;
let computerSelection;

// let tie = 'It is a tie!';
// let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
// let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;


// create function called getComputerChoice

function getComputerChoice() {
  const array = ['rock', 'paper', 'scissors'];
  let choice = array[Math.floor(Math.random() * array.length)];
  return choice;
}

const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', function () {playerSelection = 'rock'});
rockBtn.addEventListener('click', playRound);

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', () => {playerSelection = 'paper'});
paperBtn.addEventListener('click', playRound);

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {playerSelection = 'scissors'});
scissorsBtn.addEventListener('click', playRound);



function playRound(playerSelection, computerSelection) { 
  computerSelection = getComputerChoice();

  if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'paper')) {
    return 'It is a tie!';
  }
  
  else if ((playerSelection === 'scissors' && computerSelection === 'paper') || 
  (playerSelection === 'rock' && computerSelection === 'scissors') || 
  (playerSelection === 'paper' && computerSelection === 'rock')){
    playerScore++; 
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }

  else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') ||
  (playerSelection === 'scissors' && computerSelection === 'rock')){
    computerScore++; 
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  
console.log(computerSelection);
console.log(playerSelection);

console.log('Player score = ' + playerScore, 'Computer score = ' + computerScore);
// if (computerScore > playerScore){
// console.log('Computer wins!');
// }
// else if (computerScore < playerScore){
// console.log('Player wins!');
// }
// else {
// console.log('It is a tie!');
// }
}




    
  



