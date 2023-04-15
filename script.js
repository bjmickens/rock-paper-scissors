// create function called getComputerChoice

function getComputerChoice(arr) {

  const randomIndex = Math.floor(Math.random() * arr.length);
  
  const choice = arr[randomIndex]
  
  return choice;

}

const array = ['Rock', 'Paper', 'Scissors'];


//create function that plays a single round of RPS
//take two parameters - playerSelection and computerSelection
//computerSelection is result of getComputerChoice function 
//playSelection should be prompted and case-insensitive
//return a string that declares the winner of the round 

const playerSelection = prompt('Enter Rock, Paper, or Scissors').toLowerCase();
const computerSelection = getComputerChoice(array).toLowerCase();

function playRound(playerSelection, computerSelection) {
   if (playerSelection === 'rock' && computerSelection === 'rock'){
    alert('It is a tie!');
   }
   else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    alert('It is a tie!');
   }
   else if (playerSelection === 'paper' && computerSelection === 'paper'){
    alert('It is a tie!');
   }

   else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    alert('You lose! Rock beats Scissors!');
   }
   else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    alert('You win! Scissors beats Paper!');
   }

   else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    alert('You win! Rock beats Scissors!');
   }
   else if (playerSelection === 'rock' && computerSelection === 'paper'){
    alert('You lose! Paper beats Rock!');
   }

   else if (playerSelection === 'paper' && computerSelection === 'rock'){
    alert('You win! Paper beats Rock!');
   }
   else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    alert('You lose! Scissors beats Paper!');
   }
}


console.log('Computer selected:' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
