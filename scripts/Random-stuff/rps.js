var clickCount = 0;
var maxClicks = 5;
var PlayerSelection;
let playerScore = 0;
let computerScore = 0;

function handleClick() {
  clickCount++;
  if (clickCount >= maxClicks) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
    document.getElementById("refreshMessage").innerHTML =
      "Please refresh the page.";
    if (playerScore > computerScore) {
      document.getElementById("finalResult").innerHTML =
        "Overall winner is you!";
    } else if (playerScore < computerScore) {
      document.getElementById("finalResult").innerHTML =
        "Overall winner is the computer!";
    } else {
      document.getElementById("finalResult").innerHTML = "It's a tie!";
    }
  }
}

function Rock() {
  PlayerSelection = "R";
  game();
}

function Paper() {
  PlayerSelection = "P";
  game();
}

function Scissor() {
  PlayerSelection = "S";
  game();
}

var rock = document.getElementById("rock");
rock.addEventListener("click", Rock);

var paper = document.getElementById("paper");
paper.addEventListener("click", Paper);

var scissor = document.getElementById("scissor");
scissor.addEventListener("click", Scissor);

function getComputerChoice() {
  const GameChoices = ["R", "P", "S"];
  let computerSelection = Math.floor(Math.random() * GameChoices.length);
  return GameChoices[computerSelection];
}

function playRound(PlayerSelection, computerSelection) {
  let winner;
  if (PlayerSelection == "R") {
    if (computerSelection == "R") {
      document.getElementById("roundResult").innerHTML = "Tie";
    } else if (computerSelection == "P") {
      document.getElementById("roundResult").innerHTML = "You lose";
      winner = "computer";
    } else if (computerSelection == "S") {
      document.getElementById("roundResult").innerHTML = "You win";
      winner = "player";
    }
  } else if (PlayerSelection == "P") {
    if (computerSelection == "P") {
      document.getElementById("roundResult").innerHTML = "Tie";
    } else if (computerSelection == "S") {
      document.getElementById("roundResult").innerHTML = "You lose";
      winner = "computer";
    } else if (computerSelection == "R") {
      document.getElementById("roundResult").innerHTML = "You win";
      winner = "player";
    }
  } else if (PlayerSelection == "S") {
    if (computerSelection == "S") {
      document.getElementById("roundResult").innerHTML = "Tie";
    } else if (computerSelection == "R") {
      document.getElementById("roundResult").innerHTML = "You lose";
      winner = "computer";
    } else if (computerSelection == "P") {
      document.getElementById("roundResult").innerHTML = "You win";
      winner = "player";
    }
  }

  updateScore(winner);
}

function updateScore(winner) {
  if (winner === "player") {
    playerScore++;
    document.getElementById("wins").innerHTML = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    document.getElementById("losses").innerHTML = computerScore;
  }
}

function game() {
  let computerSelection = getComputerChoice();
  playRound(PlayerSelection, computerSelection);
}
