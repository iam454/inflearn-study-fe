const gameContainer = document.querySelector(".game-container");
const playerWinsText = document.querySelector(".player-wins");
const computerWinsText = document.querySelector(".computer-wins");
const resultText = document.querySelector(".result-text");
let turnsText = document.querySelector(".remaining-turns");

let playerWins = 0;
let computerWins = 0;
let remainingTurns = 10;

const choices = ["ROCK", "PAPER", "SCISSORS"];

gameContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("nes-btn")) {
    return;
  }
  const buttonText = event.target.textContent;
  if (buttonText === "RESTART") {
    resetGame();
  } else if (remainingTurns > 0) {
    playRound(buttonText);
  }
});

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const winner = getWinner(playerChoice, computerChoice);

  if (winner === "player") {
    playerWins++;
  } else if (winner === "computer") {
    computerWins++;
  }

  updateUI(winner);
  remainingTurns--;
  turnsText.textContent = remainingTurns;

  if (remainingTurns === 0) {
    endGame();
  }
}

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }
  if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "SCISSORS" && computer === "PAPER") ||
    (player === "PAPER" && computer === "ROCK")
  ) {
    return "player";
  }
  return "computer";
}

function updateUI(winner) {
  let message = "";

  if (winner === "player") {
    message = "Player wins!";
  } else if (winner === "computer") {
    message = "Computer wins!";
  } else {
    message = "It's a draw!";
  }

  resultText.textContent = message;
  playerWinsText.textContent = playerWins;
  computerWinsText.textContent = computerWins;
}

function endGame() {
  let message = "";

  if (playerWins > computerWins) {
    message = "VICTORY";
  } else if (playerWins < computerWins) {
    message = "DEFEAT";
  } else {
    message = "DRAW";
  }

  resultText.textContent = message;
  gameContainer.innerHTML = `
    <button class="nes-btn is-warning">RESTART</button>
  `;
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  remainingTurns = 10;

  playerWinsText.textContent = playerWins;
  computerWinsText.textContent = computerWins;
  resultText.textContent = "Let's play!";

  gameContainer.innerHTML = `
    <span>Choose rock, paper, or scissors.</span>
    <span>Remaining turns: <span class="remaining-turns">10</span></span>
    <div>
      <button class="nes-btn is-primary">ROCK</button>
      <button class="nes-btn is-primary">PAPER</button>
      <button class="nes-btn is-primary">SCISSORS</button>
    </div>
  `;

  turnsText = document.querySelector(".remaining-turns");
}
