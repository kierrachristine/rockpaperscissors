function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    const playerSelectionLower = playerSelection.toLowerCase();
  
    // Determine the winner based on the selections
    if (playerSelectionLower === computerSelection.toLowerCase()) {
      return "It's a tie!";
    } else if (
      (playerSelectionLower === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
      (playerSelectionLower === 'paper' && computerSelection.toLowerCase() === 'rock') ||
      (playerSelectionLower === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
      return `You Win! ${playerSelectionLower} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelectionLower}`;
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(`Round ${round}: ${result}`);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log(`Final Score - Player: ${playerScore} | Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Oops! You lose the game. Better luck next time!");
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }
  
  game();
  

  