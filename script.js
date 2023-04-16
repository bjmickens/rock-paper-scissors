// create function called getComputerChoice

function getComputerChoice() {
  const array = ['Rock', 'Paper', 'Scissors'];
  let choice = array[Math.floor(Math.random() * array.length)];
  return choice;

}



//create function that plays a single round of RPS
//take two parameters - playerSelection and computerSelection
//computerSelection is result of getComputerChoice function 
//playSelection should be prompted and case-insensitive
//return a string that declares the winner of the round 



let playerScore = 0; 
let computerScore = 0; 

let playerSelection;
let computerSelection;

// let tie = 'It is a tie!';
// let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
// let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;




    function playRound(playerSelection, computerSelection) { 
      playerSelection = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
      computerSelection = getComputerChoice().toLowerCase();

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
     
    }
      
    function game(){
      for(let i=0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection)); 
      }
    }
    game(); 
    
    // console.log('Computer selected: ' + computerSelection);
       
       console.log('Player score = ' + playerScore, 'Computer score = ' + computerScore);



