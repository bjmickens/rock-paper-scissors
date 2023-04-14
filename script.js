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


const computerSelection = getComputerChoice(array);
console.log(computerSelection);
