let playerScore = 0;
let compScore = 0;
let ties = 0;
let playerLose = 0;
let compLose = 0;
let playerTie = 0;
let compTie = 0;

function updateScores(result) {
  if (result === 'You won') {
    playerScore++;
    compLose++;
  } else if (result === 'You lose') {
    compScore++;
    playerLose++;
  } else {
    ties++;
    playerTie++;
    compTie++;
  }

  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('compScore').textContent = compScore;

  document.getElementById('playerWin').textContent = `Win: ${playerScore}`;
  document.getElementById('playerLose').textContent = `Lose: ${playerLose}`;
  document.getElementById('playerTie').textContent = `Tie: ${playerTie}`;

  document.getElementById('compWin').textContent = `Win: ${compScore}`;
  document.getElementById('compLose').textContent = `Lose: ${compLose}`;
  document.getElementById('compTie').textContent = `Tie: ${compTie}`;
}

let playerMove = '';
let compMove = '';

function getComputerMove() {
  let randMove = Math.random();
  if (randMove >= 0 && randMove < 1 / 3) {
    return 'rock';
  } else if (randMove >= 1 / 3 && randMove < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function move() {
  compMove = getComputerMove();
  if (playerMove === compMove) {
    return 'Tie';
  } else if (playerMove === 'rock' && compMove === 'scissors' ||
    playerMove === 'paper' && compMove === 'rock' ||
    playerMove === 'scissors' && compMove === 'paper') {
    return 'You won';
  } else {
    return 'You lose';
  }
}

document.getElementById('rock').onclick = function rock() {
  playerMove = 'rock';
  let result = move();
  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}`);
  updateScores(result);
};

document.getElementById('paper').onclick = function paper() {
  playerMove = 'paper';
  let result = move();
  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}`);
  updateScores(result);
};

document.getElementById('scissors').onclick = function scissors() {
  playerMove = 'scissors';
  let result = move();
  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}`);
  updateScores(result);
};



























